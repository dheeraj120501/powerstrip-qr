import React from "react";
import MobileDetect from "mobile-detect";
import { RotatingSquare } from "react-loader-spinner";

export default function App() {
  const [, setAbout] = React.useState(null);
  const redirect = (url) => {
    window.location = url;
  };

  React.useEffect(() => {
    if (window.location.href.includes("deviceId")) {
      window.location = `${window.location.href}/?deviceId=123`;
      console.log(window.location.href.includes("deviceId"));
    } else {
      const md = new MobileDetect(window.navigator.userAgent);
      setAbout(md);
      if (md.os() === "AndroidOS")
        setTimeout(
          () =>
            redirect(
              "https://play.google.com/store/apps/details?id=com.whatsapp"
            ),
          500
        );
      if (md.is("iPhone"))
        setTimeout(
          () =>
            redirect(
              "https://apps.apple.com/in/app/whatsapp-messenger/id310633997"
            ),
          500
        );

      setTimeout(() => redirect("https://www.powerstrip.in/"), 500);
    }
  }, []);
  return (
    <div className="App">
      <RotatingSquare
        height="100"
        width="100"
        color="#4D96BE"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
