export function CellClassnameRenderer(props: any) {
  const { children, classnames, columnName, columnIndex, renderers, cellType, sortable, index, sortedFieldIndex, reverseSort, onClickHandler } = props;
  
  function renderHeaderSortIcon() {
    if (sortable) {
      if (index.toString() === sortedFieldIndex.toString()) {
        if (!reverseSort) {
          return <span className="custom-icon sort-up"></span>;
        } else {
          return <span className="custom-icon sort-down"></span>;
        }
      } else {
        return <span className="custom-icon sort"></span>;
      }
    }
  }


  let classes = `${typeof renderers === "object" ? renderers.join(" "): ""}${
    classnames !== (null || undefined) ? ` ${classnames}` : ``
  }`.trimEnd();
  return cellType === "th" ? (
    <th className={classes} data-column-name={columnName} data-column-index={columnIndex} onClick={onClickHandler}>{children}
    {renderHeaderSortIcon()}</th>
  ) : (
    <td className={classes} onClick={onClickHandler}>{children}</td>
  );
}
