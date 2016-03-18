# Survey-Radar

A D3js-based tool to transform your survey data from an excel sheet into two visually appealing radar displays.
Freely configurable parameters can be used to fine-tune the appearence. SVG export ensures the use outside of the application.

## Installation
Clone the repository, run `npm install` and start the application via the index.html in the root directory.

## Usage
- Import an `.xlsx` file adhering the the format displayed below.
- Choose the offsets (number of rows and columns) from the top and left to ignore during parsing. This should be used to prevent the application from trying to parse e.g. headers etc.
- Select the columns that respectively contain the main categories, subcategories, question categories and detail questions.
- Select the column(s) that contain(s) the values that you want to display in the radar.
- Edit further configuration freely. The display is updated on-the-fly. Configurations can be exported and imported.
- Export the radars as SVG to use outside of this application.

## Input data format
| Main categories | Subcategories | Question categories | Detail questions | Value col 1 | Value col 2 |
| --------------- | ------------- | ------------------- | ---------------- |:-----------:|:-----------:|
| MainCat 1       | SubCat 1.1    | QCat 1.1.1          | DetQ 1.1.1.1     | 65          | 49          |
|                 |               |                     | DetQ 1.1.1.2     | 87          | 93          |
|                 |               |                     | DetQ 1.1.1.3     | 25          | 60          |
|                 |               | QCat 1.1.2          | DetQ 1.1.2.1     | 32          | 54          |
|                 |               | QCat 1.1.3          | DetQ 1.1.3.1     | 100         | 75          |
|                 |               |                     | DetQ 1.1.3.2     | 87          | 44          |
|                 | SubCat 1.2    | QCat 1.2.1          | DetQ 1.2.1.1     | 33          | 22          |
|                 |               | QCat 1.2.2          | DetQ 1.2.2.1     | 87          | 93          |
|                 |               |                     | DetQ 1.2.2.2     | 100         | 100         |
| MainCat 2       | SubCat 2.1    | QCat 2.1.1          | DetQ 2.1.1.1     | 60          | 30          |
|                 |               | QCat 1.1.2          |                  | 77          | 66          |

The last row exhibits a specific case: A value will always be assigned to the smallest category unit that's found. In all but the last row this results in assigning the values to the respective detail question. In the last row no detail question exists. Therefore, the values are assigned to the question category.
Values are aggregated up the hierarchy by calculating the average of the elements of the respective lower level.
