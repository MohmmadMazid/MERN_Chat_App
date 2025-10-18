import React from "react";

const User = () => {
  return (
    <div className="flex gap-5 ">
      <div className="avatar avatar-online">
        <div className="rounded-full w-12">
          <img src="https://img.daisyui.com/images/profile/demo/distracted3@192.webp" />
        </div>
      </div>
      <div>
        <h2 className="line-clamp-1 ">Full name</h2>
        <p className="text-xs">username</p>
      </div>
    </div>
  );
};

export default User;
