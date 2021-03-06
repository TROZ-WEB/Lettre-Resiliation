import * as React from "react";

function SvgEdit(props) {
  return (
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M17.513 2.766l-1.278-1.278L7.773 9.95l1.278 1.279 8.462-8.463zM17.457.265l1.278 1.278a.904.904 0 010 1.278l-9.22 9.223a.723.723 0 01-.283.175l-2.644.88a.542.542 0 01-.686-.685l.881-2.644a.723.723 0 01.175-.283L16.18.265a.904.904 0 011.278 0zm-2.093 7.89h.904v8.585a2.26 2.26 0 01-2.26 2.26H2.26A2.26 2.26 0 010 16.74V4.99a2.26 2.26 0 012.26-2.26h8.584v.904H2.26c-.748 0-1.355.607-1.355 1.356v11.75c0 .75.607 1.356 1.355 1.356h11.75c.748 0 1.355-.607 1.355-1.356V8.154z"
      />
    </svg>
  );
}

export default SvgEdit;
