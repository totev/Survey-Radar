/**
 * Based on https://github.com/NYTimes/svg-crowbar
 */
class DownloadService {
    constructor($window, $timeout) {
        this.$window = $window;
        this.$timeout = $timeout;
    }

    downloadSVG(svgContainerId) {
        if(svgContainerId === undefined || svgContainerId === null || svgContainerId === "") throw new Error("No SVG container ID provided!");
        let doc = this.$window.document;

        let styles = this.getStyles(doc);
        let svgSource = this.getSource(svgContainerId, styles);

        if (svgSource) {
            let filename = svgSource.id;
            let url = this.$window.URL.createObjectURL(new Blob(svgSource.source, { "type" : "text\/xml" }));

            let a = this.$window.document.createElement("a");
            body.appendChild(a);
            a.setAttribute("download", filename + ".svg");
            a.setAttribute("href", url);
            a.style["display"] = "none";
            a.click();

            let that = this;
            this.$timeout(() => that.$window.URL.revokeObjectURL(url), 10);
        }
    }


    getSource(svgContainer, styles = "") {
        let prefix = {
                xmlns: "http://www.w3.org/2000/xmlns/",
                xlink: "http://www.w3.org/1999/xlink",
                svg: "http://www.w3.org/2000/svg"
            },
            doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';

        let svg = this.$window.document.querySelector(`${svgContainer} svg`);

        if(!svg) throw new Error("SVG element not found!");

        svg.setAttribute("version", "1.1");

        var defsEl = this.$window.document.createElement("defs");
        svg.insertBefore(defsEl, svg.firstChild); //TODO   .insert("defs", ":first-child")

        var styleEl = this.$window.document.createElement("style")
        defsEl.appendChild(styleEl);
        styleEl.setAttribute("type", "text/css");

        // removing attributes so they aren't doubled up
        svg.removeAttribute("xmlns");
        svg.removeAttribute("xlink");

        // These are needed for the svg
        if (!svg.hasAttributeNS(prefix.xmlns, "xmlns")) {
            svg.setAttributeNS(prefix.xmlns, "xmlns", prefix.svg);
        }

        if (!svg.hasAttributeNS(prefix.xmlns, "xmlns:xlink")) {
            svg.setAttributeNS(prefix.xmlns, "xmlns:xlink", prefix.xlink);
        }

        let source = (new XMLSerializer()).serializeToString(svg).replace('</style>', '<![CDATA[' + styles + ']]></style>');
        let rect = svg.getBoundingClientRect();

        return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            class: svg.getAttribute("class"),
            id: svgContainer.substr(1),
            childElementCount: svg.childElementCount,
            source: [doctype + source]
        };
    }

    getStyles(doc) {
        var styles = "";

        angular.forEach(doc.styleSheets, (stylesheet) => processStyleSheet(stylesheet));

        function processStyleSheet(ss) {
            angular.forEach(ss.cssRules, (rule) => {
                if (rule.type === 3) {
                    // Import Rule
                    processStyleSheet(rule.styleSheet);
                } else {
                    // hack for illustrator crashing on descendent selectors
                    if (rule.selectorText) {
                        if (rule.selectorText.indexOf(">") === -1) {
                            styles += "\n" + rule.cssText;
                        }
                    }
                }
            });
        }
        return styles;
    }
}

export default angular.module('services.download-service', [])
                      .service('downloadService', DownloadService)
                      .name;