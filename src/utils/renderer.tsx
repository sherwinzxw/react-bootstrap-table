export function CellClassnameRenderer(props: any) {
  const {
    children,
    classnames,
    columnName,
    columnIndex,
    renderers,
    cellType,
    onClickHandler,
  } = props;

  let classes = `${typeof renderers === "object" ? renderers.join(" ") : ""}${
    classnames !== (null || undefined) ? ` ${classnames}` : ``
  }`.trimEnd();
  return cellType === "th" ? (
    <th
      className={classes}
      data-column-name={columnName}
      data-column-index={columnIndex}
      onClick={onClickHandler}
    >
      {children}
    </th>
  ) : (
    <td className={classes} onClick={onClickHandler}>
      {children}
    </td>
  );
}
