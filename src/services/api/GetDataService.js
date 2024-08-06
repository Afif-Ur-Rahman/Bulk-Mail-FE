const GetDataService = async (
  base_url,
  pages,
  setPages,
  setData,
  token,
) => {
  try {
    const response = await fetch(`${base_url}/getdata?page=${pages.page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const result = await response.json();

    if (result.success) {
      setPages({
        ...pages,
        page: result.page,
        totalPages: result.totalPages,
      });
      setData(result.data);
    } else {
      console.error("Error fetching data:", result.data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default GetDataService;
