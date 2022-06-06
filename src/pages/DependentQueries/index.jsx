import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`);
}

const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`);
}

export const DependentQueries = ({ email }) => {
   const { data: user } = useQuery(["user", email], () => fetchUserByEmail(email));
   const channelId = user?.data.channelId;

   const { data: courses } = useQuery(["courses", channelId], () => fetchCoursesByChannelId(channelId), {
       enabled: !!channelId, //o double negatio converte pra um boolean
   });

   console.log(courses)
  return (
    <div>
        <h1>Dependent Queries</h1>
    </div>
  )
}
