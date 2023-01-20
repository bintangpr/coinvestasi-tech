import bitcoin from "../aset/bitcoin.svg"
import bca from "../aset/bca.svg"
function KomparasiTabel(){
    return(
        <div className="my-2">
            <table className="table-auto w-full">
            <thead className="">
                <tr className="bg-blueText text-white font-inter font-bold text-sm">
                    <th className="w-1/5 py-2">Aset</th>
                    <th className="w-1/5 py-2">Harga Beli(2016)</th>
                    <th className="w-1/5 py-2">Harga Jual(2020)</th>
                    <th className="w-1/5 py-2">Profit (Rp)</th>
                    <th className="w-1/5 py-2">Profit (%)</th>
                </tr>
            </thead>
            <tbody>
                <tr className="font-inter font-medium text-sm">
                    <td className="w-1/5 py-2"><img src={bitcoin} alt="bitcoin" className="mx-auto"/></td>
                    <td className="w-1/5 py-2 text-center">Rp 12.974.831</td>
                    <td className="w-1/5 py-2 text-center">Rp 410.410.296</td>
                    <td className="w-1/5 py-2 text-center">Rp 397.435.465</td>
                    <td className="w-1/5 py-2 text-center">3.063,13%</td>
                </tr>

                <tr className="bg-boxLinear font-inter font-medium text-sm">
                    <td className="w-1/5 py-2"><img src={bca} alt="bitcoin" className="mx-auto"/></td>
                    <td className="w-1/5 py-2 text-center">Rp 16.200.000</td>
                    <td className="w-1/5 py-2 text-center">Rp 34.000.000</td>
                    <td className="w-1/5 py-2 text-center">Rp 17.800.000</td>
                    <td className="w-1/5 py-2 text-center">109,88%</td>
                </tr>

                <tr className="font-inter font-medium text-sm">
                    <td className="w-1/5 py-2"><img src={bitcoin} alt="bitcoin" className="mx-auto"/></td>
                    <td className="w-1/5 py-2 text-center">Rp 12.974.831</td>
                    <td className="w-1/5 py-2 text-center">Rp 410.410.296</td>
                    <td className="w-1/5 py-2 text-center">Rp 397.435.465</td>
                    <td className="w-1/5 py-2 text-center">3.063,13%</td>
                </tr>

                <tr className="bg-boxLinear font-inter font-medium text-sm">
                    <td className="w-1/5 py-2"><img src={bca} alt="bitcoin" className="mx-auto"/></td>
                    <td className="w-1/5 py-2 text-center">Rp 16.200.000</td>
                    <td className="w-1/5 py-2 text-center">Rp 34.000.000</td>
                    <td className="w-1/5 py-2 text-center">Rp 17.800.000</td>
                    <td className="w-1/5 py-2 text-center">109,88%</td>
                </tr>

                <tr className="font-inter font-medium text-sm">
                    <td className="w-1/5 py-2"><img src={bitcoin} alt="bitcoin" className="mx-auto"/></td>
                    <td className="w-1/5 py-2 text-center">Rp 12.974.831</td>
                    <td className="w-1/5 py-2 text-center">Rp 410.410.296</td>
                    <td className="w-1/5 py-2 text-center">Rp 397.435.465</td>
                    <td className="w-1/5 py-2 text-center">3.063,13%</td>
                </tr>

                <tr className="bg-boxLinear font-inter font-medium text-sm">
                    <td className="w-1/5 py-2"><img src={bca} alt="bitcoin" className="mx-auto"/></td>
                    <td className="w-1/5 py-2 text-center">Rp 16.200.000</td>
                    <td className="w-1/5 py-2 text-center">Rp 34.000.000</td>
                    <td className="w-1/5 py-2 text-center">Rp 17.800.000</td>
                    <td className="w-1/5 py-2 text-center">109,88%</td>
                </tr>
                <tr>
                    <td colSpan={5} className="w-1/5 py-2 text-center text-greyTableText bg-boxLinear">Perbandingan Keuntungan Bitcoin dan Saham</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default KomparasiTabel