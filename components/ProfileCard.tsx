import React from "react";

interface ProfileCardProps {
  avatarUrl: string;
  iconUrl?: string;
  grainUrl?: string;
  behindGradient?: string;
  innerGradient?: string;
  showBehindGradient?: boolean;
  className?: string;
  enableTilt?: boolean;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl = "<Placeholder for avatar URL>",
  iconUrl = "<Placeholder for icon URL>",
  grainUrl = "<Placeholder for grain URL>",
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  miniAvatarUrl,
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}) => {
  return (
    <div className={`profile-card ${className}`} style={{ backgroundImage: behindGradient }}>
      <div className="profile-avatar">
        <img src={avatarUrl} alt="Avatar" />
      </div>
      <div className="profile-details">
        <h3>{name}</h3>
        <p>{title}</p>
        <div className="contact-info">
          <p>@{handle}</p>
          <p>{status}</p>
        </div>
        {showUserInfo && (
          <button onClick={onContactClick}>{contactText}</button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
