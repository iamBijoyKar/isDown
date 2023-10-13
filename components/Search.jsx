"use client";
import { Input, Typography, Button, Spinner } from "../app/material-ui";
import { theme } from "../store/theme";
import { AiFillInfoCircle } from "react-icons/ai";
import { useState } from "react";
import Report from "./Report";
import { serverReport } from "@/utils";

export default function Search() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(false);
  const [data, setData] = useState(null);

  const validUrl = (url) => {
    const regex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm;
    if (!regex.test(url)) {
      setError("Please enter a valid URL");
      return false;
    }
    return true;
  };

  const checkStatus = (url) => {
    if (!validUrl(url)) return;
    const newUrl = url.replaceAll("/", "%~%");
    console.log(newUrl, url);
    fetch(`http://127.0.0.1:8000/api/url/${newUrl}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // setData(serverReport(url));
    setTimeout(() => {
      setLoading(false);
      checkStatus(url);
      setResult(true);
    }, 2000);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center w-full md:w-[440px] lg:w-[700px]"
      >
        <Input
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          className="text-lg"
          type="url"
          label="Search"
          size="lg"
          variant="outlined"
          color="white"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          type="submit"
          className="!absolute right-1 top-[6px] rounded"
          color="lightBlue"
          ripple="light"
          size="sm"
          disabled={!url}
          style={{
            color: theme.primaryText,
            backgroundColor: theme.primaryBtnBg,
          }}
        >
          Check
        </Button>
      </form>
      <Typography className="mt-2 text-center" color="">
        <AiFillInfoCircle className="inline-block mr-2" />
        Enter a domain name or URL to check if its server is down.
      </Typography>
      {loading && (
        <div className="mt-4">
          <Spinner
            color="teal"
            className="w-14 h-14 text-green-100 "
            style={{ color: theme.spinner }}
          />
        </div>
      )}

      {result && (
        <div className="mt-4">
          <Report data={data} />
        </div>
      )}
    </div>
  );
}
