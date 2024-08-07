const GetTemplateService = async (
  base_url,
  pages,
  setPages,
  setMailTemplatesData,
  token
) => {
  try {
    const response = await fetch(
      `${base_url}/getmailtemplates?page=${pages.page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    const result = await response.json();

    if (result.success) {
      setPages({
        ...pages,
        page: result.page,
        totalPages: result.totalPages,
      });
      setMailTemplatesData(result.data);
    } else {
      console.error("Error fetching data:", result.data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default GetTemplateService;
