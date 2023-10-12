"use client";
import { serverReport } from "@/utils";
import PropTypes from "prop-types";

Report.propTypes = {
  data: PropTypes.object.isRequired,
};

export default function Report({ data }) {
  console.log(data);
  return (
    <>
      <h1>Report</h1>
      <div className=""></div>
    </>
  );
}
