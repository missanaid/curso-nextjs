import { FC, PropsWithChildren } from "react";

const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(62, 62, 62, 0.412)",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <div>{children}</div>
      </div>
    </>
  );
};

export default DarkLayout;
