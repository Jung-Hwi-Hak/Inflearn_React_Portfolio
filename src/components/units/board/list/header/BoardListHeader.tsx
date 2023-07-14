import type { IBoardListHeaderProps } from "./BoardListHeader.types";

export default function BoardListHeader(
  props: IBoardListHeaderProps
): JSX.Element {
  return <div>{props.children}</div>;
}
