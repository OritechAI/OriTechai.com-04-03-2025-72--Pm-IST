import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const CalendarBooking = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="calendar-container h-full w-full">
      <Cal 
        calLink="oritech-ai/discovery-call"
        style={{width:"100%", height:"650px", overflow:"hidden"}}
        config={{
          layout: "month_view",
          hideEventTypeDetails: false,
          theme: "dark",
          styles: {
            branding: {
              brandColor: "#ce0005"
            },
            background: "transparent",
            elementBackground: "#2a2a2a",
            textColor: "#ffffff"
          }
        }}
      />
    </div>
  );
};

export default CalendarBooking;