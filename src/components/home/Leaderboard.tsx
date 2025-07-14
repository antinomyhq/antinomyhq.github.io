import React from 'react';
import Section from '../shared/Section';

export interface LeaderboardUser {
  serialNumber: number;
  name: string;
  requests: number;
  linesOfCode: number;
  profilePicture: string;
}

export interface LeaderboardProps {
  users?: LeaderboardUser[]
}

const defaultUsers: LeaderboardUser[] = [
  { serialNumber: 1, name: "Alice Johnson", requests: 1250, linesOfCode: 45000, profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" },
  { serialNumber: 2, name: "Bob Smith", requests: 1180, linesOfCode: 42000, profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" },
  { serialNumber: 3, name: "Carol Davis", requests: 1120, linesOfCode: 38000, profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carol" },
  { serialNumber: 4, name: "David Wilson", requests: 1050, linesOfCode: 35000, profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
  { serialNumber: 5, name: "Eva Brown", requests: 980, linesOfCode: 32000, profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eva" },
  { serialNumber: 6, name: "Frank Miller", requests: 920, linesOfCode: 29000, profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Frank" },
  { serialNumber: 7, name: "Grace Lee", requests: 860, linesOfCode: 26000, profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace" },
  { serialNumber: 8, name: "Henry Taylor", requests: 800, linesOfCode: 23000, profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Henry" },
  { serialNumber: 9, name: "Ivy Chen", requests: 740, linesOfCode: 20000, profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivy" },
  { serialNumber: 10, name: "Jack Anderson", requests: 680, linesOfCode: 17000, profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" }
];

const Leaderboard: React.FC<LeaderboardProps> = ({
  users = defaultUsers
}) => {
  const leftUsers = users.slice(0, 5);
  const rightUsers = users.slice(5, 10);

  const renderTable = (userData: LeaderboardUser[], isMobile: boolean = false) => (
    <div className="overflow-x-auto">
      <div className="min-w-full">
        {isMobile ? (
          // Mobile: Table layout with consistent columns
          <>
            <div className="mb-3 sm:mb-4">
              <div 
                className="grid py-2 sm:py-3" 
                style={{ 
                  gridTemplateColumns: '45px 32px 1fr 65px 75px',
                  gap: '6px 8px'
                }}
              >
                <div className="text-left text-tailCall-white font-semibold text-xs">Rank</div>
                <div className="text-left text-tailCall-white font-semibold text-xs"></div>
                <div className="text-left text-tailCall-white font-semibold text-xs">Name</div>
                <div className="text-left text-tailCall-white font-semibold text-xs">Requests</div>
                <div className="text-left text-tailCall-white font-semibold text-xs">Lines of Code</div>
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              {userData.map((user) => (
                <div 
                  key={user.serialNumber} 
                  className="grid py-2 sm:py-3 transition-colors hover:bg-tailCall-dark-500/30 rounded-lg" 
                  style={{ 
                    gridTemplateColumns: '45px 32px 1fr 65px 75px',
                    gap: '6px 8px'
                  }}
                >
                  <div className="text-tailCall-light-300 text-xs font-medium">
                    {user.serialNumber}
                  </div>
                  <div className="flex justify-start">
                    <img 
                      src={user.profilePicture} 
                      alt={`${user.name}'s profile`}
                      className="w-5 h-5 rounded-full bg-tailCall-dark-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=374151&color=ffffff&size=32`;
                      }}
                    />
                  </div>
                  <div className="text-tailCall-white font-medium text-xs break-words overflow-wrap-anywhere">
                    {user.name}
                  </div>
                  <div className="text-tailCall-light-300 text-xs text-right">
                    {user.requests > 999 ? `${Math.round(user.requests / 1000)}k` : user.requests}
                  </div>
                  <div className="text-tailCall-light-300 text-xs text-right">
                    {user.linesOfCode > 999 ? `${Math.round(user.linesOfCode / 1000)}k` : user.linesOfCode}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Desktop: Table layout
          <>
            <div className="mb-3 sm:mb-4">
              <div 
                className="grid py-2 sm:py-3" 
                style={{ 
                  gridTemplateColumns: '50px 35px 1fr 80px 90px',
                  gap: '8px 12px'
                }}
              >
                <div className="text-left text-tailCall-white font-semibold text-xs sm:text-sm">Rank</div>
                <div className="text-left text-tailCall-white font-semibold text-xs sm:text-sm"></div>
                <div className="text-left text-tailCall-white font-semibold text-xs sm:text-sm">Name</div>
                <div className="text-left text-tailCall-white font-semibold text-xs sm:text-sm">Requests</div>
                <div className="text-left text-tailCall-white font-semibold text-xs sm:text-sm">Lines of Code</div>
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              {userData.map((user) => (
                <div 
                  key={user.serialNumber} 
                  className="grid py-2 sm:py-3 transition-colors hover:bg-tailCall-dark-500/30 rounded-lg" 
                  style={{ 
                    gridTemplateColumns: '50px 35px 1fr 80px 90px',
                    gap: '8px 12px'
                  }}
                >
                  <div className="text-tailCall-light-300 text-xs sm:text-sm font-medium">
                    {user.serialNumber}
                  </div>
                  <div className="flex justify-start">
                    <img 
                      src={user.profilePicture} 
                      alt={`${user.name}'s profile`}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-tailCall-dark-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=374151&color=ffffff&size=32`;
                      }}
                    />
                  </div>
                  <div className="text-tailCall-white font-medium text-xs sm:text-sm break-words leading-tight">
                    {user.name}
                  </div>
                  <div className="text-tailCall-light-300 text-xs sm:text-sm text-right">
                    {user.requests.toLocaleString()}
                  </div>
                  <div className="text-tailCall-light-300 text-xs sm:text-sm text-right">
                    {user.linesOfCode.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-tailCall-dark-600 text-tailCall-white">
      <Section>
        <div className="mb-4 sm:mb-6">
          <h1 className="text-title-large sm:text-display-tiny lg:text-display-small text-tailCall-border-light-100">
            Leaderboard
          </h1>
        </div>
      </Section>

      {/* Expanded container for tables to prevent horizontal scrolling */}
      <div className="w-full px-8 md:px-24 lg:px-36">
        <div className="w-full max-w-none mx-auto">
          {/* Mobile: Single list view (xs to sm) */}
          <div className="md:hidden">
            <div className="p-3 sm:p-4">
              <h2 className="text-title-tiny sm:text-title-small font-bold text-tailCall-white mb-3 sm:mb-4">
                Top 10 Users
              </h2>
              {renderTable(users, true)}
            </div>
          </div>

          {/* Tablet: Single list view with better spacing (md to lg) */}
          <div className="hidden md:block lg:hidden">
            <div className="p-6">
              <h2 className="text-title-small font-bold text-tailCall-white mb-4">
                Top 10 Users
              </h2>
              {renderTable(users)}
            </div>
          </div>

          {/* Desktop: Two-column layout (lg and up) */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6 xl:gap-8">
            {/* Left Table */}
            <div className="p-6">
              <h2 className="text-title-small font-bold text-tailCall-white mb-4">
                Top 5 Users
              </h2>
              {renderTable(leftUsers)}
            </div>

            {/* Right Table */}
            <div className="p-6">
              <h2 className="text-title-small font-bold text-tailCall-white mb-4">
                Next 5 Users
              </h2>
              {renderTable(rightUsers)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;