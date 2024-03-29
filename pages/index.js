import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome User | Home</title>
      </Head>
      <Layout>
        <main>
          <div class="mt-10 flex flex-col items-center">
            <h1 class="font-bold text-3xl font-serif">Welcome Everyone</h1>
            <h2 class="mt-8 text-lg font-bold font-mono">Blog App</h2>
            <div class="border-2 m-5 bg-cyan-100 border-black p-8 mt-8">
              <h1 class="text-2xl text-center font-bold font-serif">Hello</h1>
              <p class="mt-4 font-mono max-w-3xl">
                "We are all aware that we currently live and work in a world
                where AI technologies are rapidly advancing." Contrary to
                popular belief, Lorem Ipsum is not simply random text. It has
                roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up one
                of the more obscure Latin words, consectetur, from a Lorem Ipsum
                passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source. Lorem Ipsum comes
                from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                Malorum" (The Extremes of Good and Evil) by Cicero, written in
                45 BC. This book is a treatise on the theory of ethics, very
                popular during the Renaissance. The first line of Lorem Ipsum,
                "Lorem ipsum dolor sit amet..", comes from a line in section
                1.10.32. The standard chunk of Lorem Ipsum used since the 1500s
                is reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
