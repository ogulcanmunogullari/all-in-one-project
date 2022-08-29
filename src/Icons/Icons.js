import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import { chevronLeft } from "react-icons-kit/fa/chevronLeft";
import { deleteIconic } from "react-icons-kit/typicons/deleteIconic";
import { checkmark } from "react-icons-kit/icomoon/checkmark";
import { checkmark2 } from "react-icons-kit/icomoon/checkmark2";
import { lineArrowDown } from "react-icons-kit/oct/lineArrowDown";
import { lineArrowUp } from "react-icons-kit/oct/lineArrowUp";
import { clock } from "react-icons-kit/icomoon/clock";

export const LeftIcon = ({ size }) => <Icon size={size} icon={chevronLeft} />;
export const RightIcon = ({ size }) => <Icon size={size} icon={chevronRight} />;
export const DeleteIcon = ({ size }) => (
  <Icon size={size} icon={deleteIconic} />
);
export const CheckedIcon = ({ size }) => <Icon size={size} icon={checkmark} />;
export const UnCheckedIcon = ({ size }) => (
  <Icon size={size} icon={checkmark2} />
);
export const LineUpIcon = ({ size }) => <Icon size={size} icon={lineArrowUp} />;
export const LineDownIcon = ({ size }) => (
  <Icon size={size} icon={lineArrowDown} />
);
export const Clock = ({ size }) => <Icon size={size} icon={clock} />;
