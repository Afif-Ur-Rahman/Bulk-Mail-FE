const DeleteMailTemplateService = async (_id, token, base_url, setMailTemplatesData) => {
  try {
    const response = await fetch(`${base_url}/deletemailtemplate`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({_id}),
    });
    const result = await response.json();
    console.log("result = ", result);

    if (result.success) {
      setMailTemplatesData((prevdata) => prevdata.filter(template => template._id !== _id));
    } else {
      console.error("Failed to Delete Mail Template:", result.error);
    }
  } catch (error) {
    console.error("Error Deleting Mail Template:", error);
  }
};

export default DeleteMailTemplateService;
