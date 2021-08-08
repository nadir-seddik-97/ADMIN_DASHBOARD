import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://pbs.twimg.com/profile_images/600324831284977664/VyfGRgZ8_400x400.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Seddik SEDDIK</span>
            </td>
            <td className="widgetLgDate">10 Aug 2021</td>
            <td className="widgetLgAmount">122.00 DA</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://pbs.twimg.com/profile_images/600324831284977664/VyfGRgZ8_400x400.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Seddik SEDDIK</span>
            </td>
            <td className="widgetLgDate">10 Aug 2021</td>
            <td className="widgetLgAmount">122.00 DA</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://pbs.twimg.com/profile_images/600324831284977664/VyfGRgZ8_400x400.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Seddik SEDDIK</span>
            </td>
            <td className="widgetLgDate">10 Aug 2021</td>
            <td className="widgetLgAmount">122.00 DA</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://pbs.twimg.com/profile_images/600324831284977664/VyfGRgZ8_400x400.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Seddik SEDDIK</span>
            </td>
            <td className="widgetLgDate">10 Aug 2021</td>
            <td className="widgetLgAmount">122.00 DA</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
