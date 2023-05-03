import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";

import Detailseason from "lastHomework/components/detailseason";

export default function Page({
  params,
}: {
  params: { detailsTvId: number; seasonNumber: string };
}) {
  let { detailsTvId, seasonNumber } = params;

  return (
    <div>
      <Header />
      <Detailseason detailsTvId={detailsTvId} seasonNumber={seasonNumber} />
      <Footer />
    </div>
  );
}
