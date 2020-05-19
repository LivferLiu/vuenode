import request from "@/utils/request";

export const getUserByName = loginname => {
  return request({
    url: "/user/" + loginname,
    method: "GET"
  });
};
