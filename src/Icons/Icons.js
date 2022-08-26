import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import { chevronLeft } from "react-icons-kit/fa/chevronLeft";

export const LeftIcon = ({ size }) => <Icon size={size} icon={chevronLeft} />;
export const RightIcon = ({ size }) => <Icon size={size} icon={chevronRight} />;
