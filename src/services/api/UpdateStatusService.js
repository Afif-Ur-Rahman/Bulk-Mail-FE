const UpdateStatusService = async (id, newStatus, data, setData, base_url) => {
  try {
    const response = await fetch(`${base_url}/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Status: newStatus }),
    });

    if (response.ok) {
      const updatedData = data.map((item) =>
        item._id === id ? { ...item, Status: newStatus } : item
      );
      setData(updatedData);
    } else {
      console.error("Failed to update status");
    }
  } catch (error) {
    console.error("Error updating status:", error);
  }
};

export default UpdateStatusService;
