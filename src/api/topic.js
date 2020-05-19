import request from "@/utils/request";

export const getTopics = data => {
  return request({
    url: "/topics",
    method: "GET",
    params: data
  });
};

export const getTopicById = id => {
  return request({
    url: "/topic/" + id,
    method: "GET"
  });
};
