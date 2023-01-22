import { article1, article2, article3,article4, quote1 } from "../aset/text/article";
import ArticleTitle from "../component/articleTitle";
import Paragraph from "../component/paragraph";
import Quotation from "../component/quotation";
import Redirect from "../component/redirect";
import KomparasiTabel from "./komparasiTabel";
import bitcoinWhale from "../aset/bitcoinWhale.svg"
import alasanInvestasi from "../aset/alasanInvestasi.svg"
import Tags from "./tags";
import Footer from "./footer";
import Sidebar from "./sidebar";


function body() {
    return(
        <div className="w-full flex justify-center text-blackText ">
            
            <div className="w-11/12 flex xs:gap-x-8">
                {/* ADA 2 BAGIAN RELATED DAN BODY */}   
                <div className="w-full lg:w-3/4">
                    <div className="m-4 lg:ml-18 lg:mb-11 ">
                        {/* Create component for paragraph */}
                        <Paragraph article={article1}/>
                        <ArticleTitle title="Proses Kepemilikan" />
                        
                        <div>
                            {/* Give the numbering section */}
                            <div className="font-inter text-paragraph">
                            <ol className="list-decimal list-outside">
                                <li className="ml-4">Dalam proses kepemilikan saham cenderung lebih rumit, karena untuk membeli saham kamu harus membuka rekening saham di perusahaan sekuritas yang terpercaya dan sudah terdaftar di OJK.
                               
                                <ol className="list-alpha list-outside">
                                    <li className="ml-4">Proses pendaftaran ini pun harus dilakukan secara langsung ke  sekuritas, dengan membawa berkas-berkas yang cukup banyak seperti kartu identitas, buku tabungan,  data ahli waris, dan lainnya. Prosesnya pun  belum tentu selesai dalam waktu sehari. Ketika kamu sudah membuka rekening saham baru bisa membeli saham.</li>
                                </ol>
                                </li>
                                <li className="ml-4">Sedangkan kepemilikan Bitcoin lebih sederhana, kamu tinggal pilih bursa jual beli Bitcoin yang sudah
                               <ol className="list-alpha list-outside">
                                   <li className="ml-4">diawasi oleh Bappebti</li>
                                   <li className="ml-4">kemudian daftar</li>
                                   <li className="ml-4"> verifikasi dengan kartu identitas</li>
                                   <li className="ml-4">foto dan lainnya</li>
                                   <li className="ml-4">kemudian akan diproses paling lama 1×24 jam.</li>
                               </ol>
                               </li>
                               <li className="ml-4">
                               Sesudah itu kamu tinggal deposit, dan langsung bisa beli Bitcoin, proses ini pun bisa dilakukan di mana saja secara online tanpa harus mengunjungi kantor bursa crypto.
                               </li>
                            </ol>
                            </div>
                        </div>
                        <ArticleTitle title="Pasokan" />
                        <ol className="list-disc list-outside">
                            <li className="ml-4">Bitcoin hanya berjumlah 21 juta</li>
                            <li className="ml-4">jika seluruh koin ini sudah didistribusikan maka tidak akan ada lagi Bitcoin yang tercipta.</li>
                            <li className="ml-4">Karena hal tersebut maka Bitcoin menjadi langka, karena jumlah permintaan akan lebih besar dari penawaran.</li>
                        </ol>
                        <Quotation quote={quote1} writer="John Doe"/>
                        {/* redirect section */}
                        <Redirect img={bitcoinWhale} alt="Bitcoin Whale" title="Mengenal Whale Bitcoin yang Bikin Market Gonjang-Ganjing" showUrl="coinvestasi.com" url="https://coinvestasi.com/"/>
                        <p className="font-inter text-paragraph">Berbeda dengan Bitcoin, saham tidak mengenal istilah pasokan yang terbatas, karena akan selalu ada perusahaan baru yang mendaftar di bursa saham dan melakukan <span className="text-bluePage">penawaran saham ke publik.</span> Ini tidak akan menjadikannya langka, karena pilihan saham sangat beragam, mau yang tinggi, menengah, hingga saham kecil atau yg biasa disebut saham gorengan.</p>
                        <ArticleTitle title="Kapasitas untuk Menghasilkan Untung" />
                        <Paragraph article={article2} />
                        <Redirect img={alasanInvestasi}  alt="6 Alasan Investasi" title="6 Alasan Kenapa Kamu Harus Investasi Bitcoin Di 2021" showUrl="coinvestasi.com" url="https://coinvestasi.com/"/>
                        <Paragraph article={article3} />
                        <ArticleTitle title="Komparasi Profit BTC vs Top 5 Saham Indonesia" />
                        <KomparasiTabel />
                        <Paragraph article={article4} />
                        <Tags />
                        <Footer />
                    </div>
                </div>
                <div className="hidden lg:block w-1/4 ">
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default body;