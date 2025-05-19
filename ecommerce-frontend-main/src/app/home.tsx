"use client";
import React, { use, useEffect, useState } from "react";

import Layout from "@/components/Layout";
import Cookies from "js-cookie";
import decodeJWT from "@/utils/extractInformationUser";

const token = Cookies.get("token")?.toString();
const user_name = token ? decodeJWT(token).username.toString() : "";

function HomePage() {
	const [userName, setUserName] = useState<string>("");
	useEffect(() => {
		const token = Cookies.get("token");
		if (token) {
			const decodedToken = decodeJWT(token);
			if (decodedToken?.username) {
				setUserName(decodedToken.name.toString());
			} else {
				Cookies.remove("token");
			}
		}
	}, []);

	return (
		<Layout>
			<article className="bg-[url(/webp/Welcome.webp)] w-full h-full bg-no-repeat bg-cover bg-center py-[5%] px-0">
				<h1 className="my-0 mx-[20%] text-5xl">
					{user_name !== "" ? `Bienvenido ${userName}` : "Bienvenido"}
				</h1>
				<p className="w-2/4 my-[5%] mx-[20%] text-xl">
					Bienvenido a nuestra biblioteca digital, donde cada libro es una puerta a nuevos mundos. Explora entre clásicos atemporales, novelas que capturarán tu imaginación, 
					ensayos reveladores y guías prácticas para enriquecer tu día a día.
				</p>
			</article>
		</Layout>
	);
}

export default HomePage;
