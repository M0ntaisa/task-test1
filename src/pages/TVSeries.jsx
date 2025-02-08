import { Card, Button } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const { Meta } = Card;

const API_URL = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const fetchTVSeries = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${API_TOKEN}` }
    });

    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch tvseries: " + error.message);
  }
};

export default function TVSeries() {
  const { data: tvseries, error, isLoading } = useQuery({
    queryKey: ["tvseries"],
    queryFn: fetchTVSeries,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">TV Series</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tvseries.map((item) => (
            <div key={item.id} className="flex justify-center">
              <Card
                hoverable
                className="w-full max-w-xs"
                cover={
                  <img
                    alt={`${item.name}`}
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    className="h-80 object-contain"
                  />
                }
              >
                <Meta 
                  title={
                    <div className="text-center font-bold">
                      {item.name}
                    </div>
                  } 
                  description={
                    <div className="text-center">
                      Release date: {item.release_date} <br />
                      Rating: {item.vote_average}
                    </div>
                  } 
                />  
                <Button type="primary" className="w-full mt-6">
                  Watch Series
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
