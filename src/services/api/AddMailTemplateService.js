const AddMailTemplateService = async (
  emailData,
  base_url,
  token,
  setMail,
  setMailTemplatesData
) => {
  try {
    const response = await fetch(`${base_url}/addmailtemplate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(emailData),
    });
    const result = await response.json();
    console.log("result = ", result);

    if (result.success) {
      setMailTemplatesData(result.data);
      setMail(false);
    } else {
      console.error("Failed to Save Mail:", result.error);
    }
  } catch (error) {
    console.error("Error Saving Mail:", error);
  }
};

export default AddMailTemplateService;
