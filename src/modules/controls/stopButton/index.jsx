import { useDispatch } from "react-redux";

import { Button } from 'shared';

const stopArray = () => ({ type: 'CONTROLS/STOP_ARRAY' });

const StopButton = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(stopArray());

  return (
    <Button
      text="Остановить алгоритм"
      disabled={ false }
      onClick={ onClick }
    />
  );
};

export default StopButton;
