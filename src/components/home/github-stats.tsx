import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubStats() {
  return (
    <div className="mt-10">
      <h2 className="text-4xl text-[#00FF80] font-bold">
        How frequently I code
      </h2>
      <div className="dark:bg-[#00FF80]-bg bg-secondary-bg hidden rounded-lg border border-[#00FF80]/20 p-8 mt-4 lg:block">
        <GitHubCalendar username={"MasabBinZia"} blockSize={9} year={"last"} />
      </div>
    </div>
  );
}
