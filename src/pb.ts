import PocketBase from "pocketbase";

const baseUrl = "http://127.0.0.1:8090";

export const pb = new PocketBase(baseUrl);

export const getSeeds = async () => {
  return await pb.collection("seeds").getFullList();
};

export const filePath = (seed: any, name: string) =>
  `${baseUrl}/api/files/${seed.collectionId}/${seed.id}/${seed[name]}`;
