import { CellClassnameRenderer } from "utils/renderer";

export function TableBody(data: any, visibleColumns: any) {
  if (data === (null || undefined || [])) {
    return "no data";
  } else {
    return (
      <tbody>
        {data.map((row: any, rowIndex: number) => {
          return (
            <tr key={rowIndex}>
              {Object.entries(row).map(
                (
                  [cellKey, cellValueSchema]: [key: any, value: any],
                  cellIndex: number
                ) => {
                  if (visibleColumns.includes(cellKey)) {
                    return (
                      <CellClassnameRenderer
                        key={cellIndex}
                        renderers={cellValueSchema.classnameRenderers}
                        classnames={``}
                        cellType={"td"}
                      >
                        {cellValueSchema.value}
                      </CellClassnameRenderer>
                    );
                  } else {
                    return;
                  }
                }
              )}
            </tr>
          );
        })}
      </tbody>
    );
  }
}
