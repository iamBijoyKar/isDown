"use client";
import { serverReport } from "@/utils";
import PropTypes from "prop-types";
import { Typography } from "@/app/material-ui";

Report.propTypes = {
  data: PropTypes.object.isRequired,
};

export default function Report({ data }) {
  console.log(data);
  return (
    <>
      <Typography variant="h4" className="text-center mb-3">
        Report
      </Typography>
      <div className="bg-[#ffffff3a] p-4 rounded">
        <Typography variant="h5" className="text-center">
          {data.url}
        </Typography>
        <Typography variant="h6" className="text-center">
          {data.status_code}
        </Typography>
      </div>
    </>
  );
}
