export const sendTimesheetEmail = async (
  employeeName,
  weekNumber,
  attendanceDetails
) => {
  try {
    // You'll need to replace this with your actual email service endpoint
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "user@example.com", // Replace with actual user email
        subject: `Timesheet Submission - Week ${weekNumber}`,
        body: `
          Timesheet submitted by: ${employeeName}
          Week: ${weekNumber}
          
          Details:
          ${JSON.stringify(attendanceDetails, null, 2)}
        `,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};
