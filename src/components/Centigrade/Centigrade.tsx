import { converToCentigrad } from "helpers/temp";

import styles from "./Centigrade.module.scss";

interface CentigradeProps {
  temp: number;
  notShowIcon?: boolean;
}

const Centigrade = ({
  temp,
  notShowIcon = false,
}: CentigradeProps): React.ReactElement => {
  return (
    <div>
      <span className={styles.temp}>{converToCentigrad(temp)}</span>
      {notShowIcon ? null : <span className={styles.centigrad}>&#8451;</span>}
    </div>
  );
};

export default Centigrade;
