import {User} from "@/types/user";
import {getUser, getRepos} from "@/api/api";

async function main(): Promise<string> {
  const name = "R7774159";
  const user = await getUser(name);
  const repos = await getUser(name);
  return `${user.login} has ${repos.public_repos} repos and ${user.followers} followers`;
}

export default {
  main
};
