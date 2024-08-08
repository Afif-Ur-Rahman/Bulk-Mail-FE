const UpdateMailTemplateService = async (
  emailData,
  base_url,
  token,
  setMail,
  mailTemplatesData,
  setMailTemplatesData,
  templateId,
  setTemplateId
) => {
  try {
    const payload = {
      _id: templateId,
      subject: emailData.subject,
      message: emailData.message,
    };

    const response = await fetch(`${base_url}/updatemailtemplate`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    console.log("result = ", result);

    if (result.success) {
      setMailTemplatesData((prevData) =>
        prevData.map((template) =>
          template._id === templateId ? result.data : template
        )
      );
      setTemplateId(null);
      setMail(false);
    } else {
      console.error("Failed to Update Mail:", result.error);
    }
  } catch (error) {
    console.error("Error Updating Mail:", error);
  }
};

export default UpdateMailTemplateService;
