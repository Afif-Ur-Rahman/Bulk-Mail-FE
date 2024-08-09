/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAllContexts } from "../../context";
import { GetTemplateService, DeleteMailTemplateService } from "../../services";
import { useNavigate } from "react-router-dom";

const useEmailTemplate = () => {
  const {
    mailTemplatesData,
    setMailTemplatesData,
    pages,
    setPages,
    searchData,
    setSearchData,
    token,
    setMailForm,
    setMailTemplate,
    setTemplateId,
    mailForm,
  } = useAllContexts();
  const base_url = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const filteredData = mailTemplatesData.filter((item) => {
    const query = searchData.toLowerCase();
    return item?.subject?.toLowerCase().includes(query);
  });

  const handleGetTemplates = async () => {
    await GetTemplateService(
      base_url,
      pages,
      setPages,
      setMailTemplatesData,
      token
    );
  };

  useEffect(() => {
    handleGetTemplates();
  }, [pages.page]);

  return {
    filteredData,
    searchData,
    setSearchData,
    setMailForm,
    navigate,
    setMailTemplate,
    setTemplateId,
    token,
    DeleteMailTemplateService,
    base_url,
    setMailTemplatesData,
    mailForm,
  };
};

export default useEmailTemplate;
