import React, { useState, useEffect } from "react";
import axios from "axios";

function New() {
  const [userdeatil, setUserdeatil] = useState([]);

  const baseurl =  import.meta.env.VITE_APP_BASE_URL

  const axiosinstance = axios.create({
    baseURL: baseurl,
  });

  const usrdertails = async () => {
    try {
      const res = await axiosinstance.get(`/api/output/`);
      console.log(res.data, "4545454");

            const dataArray = Array.isArray(res.data) ? res.data : [res.data];

      setUserdeatil(dataArray);

      if (res.status === 200) {
        console.log("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    usrdertails();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                    <th scope="col" className="px-6 py-4">
                      Class ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Username
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Phone Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userdeatil.map((item, key) => (
                    <tr key={key} className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {item.Class_ID.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.Date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.Class_ID.Title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.Class_ID.Description}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.user.username}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.user.email}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.user.PhoneNumber}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default New;
