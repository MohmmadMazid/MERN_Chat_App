import React from "react";

const Message = () => {
  return (
    <div>
      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            />
          </div>
        </div>
        <div class="chat-header">
          Obi-Wan Kenobi
          <time class="text-xs opacity-50">12:45</time>
        </div>
        <div class="chat-bubble">You were the Chosen One!</div>
        <div class="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};

export default Message;
