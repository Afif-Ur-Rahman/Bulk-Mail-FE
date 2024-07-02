import { useAllContexts } from "../../context";

function useShowData() {
  const { setUserInfo, addDataForm } = useAllContexts();

  return {
    addDataForm,
    setUserInfo,
  };
}

export default useShowData;
