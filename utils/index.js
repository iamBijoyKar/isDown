export const serverReport = (url) => {
  const report = {};
  fetch(url)
    .then((res) => {
      console.log(res);
      if (res.ok) {
        report.status = res.status;
        report.statusText = res.statusText;
        return res.json();
      } else {
        report.status = res.status;
        report.statusText = res.statusText;
        return res.json();
      }
    })
    .then((data) => {
      report.data = data;
    })
    .catch((err) => {
      //   console.log(err);
      report.status = 500;
      report.statusText = err.message;
    });
  return report;
};
