const SendMailService = async (emailData, base_url, token) => {
  try {
    const response = await fetch(`${base_url}/sendmails`, {
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
      console.log("Emails sent successfully!");
    } else {
      console.error("Failed to send emails:", result.error);
    }
  } catch (error) {
    console.error("Error sending emails:", error);
  }
};

export default SendMailService;
