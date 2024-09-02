const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/About'>/About</a></td>
            <td style={tableCellStyle}><a href='/About'>About</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/AppFeatyres'>/AppFeatyres</a></td>
            <td style={tableCellStyle}><a href='/AppFeatyres'>App Featyres</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/AppScreenShot'>/AppScreenShot</a></td>
            <td style={tableCellStyle}><a href='/AppScreenShot'>App Screen Shot</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Blog1'>/Blog1</a></td>
            <td style={tableCellStyle}><a href='/Blog1'>Blog-1</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Category'>/Category</a></td>
            <td style={tableCellStyle}><a href='/Category'>Category</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Color'>/Color</a></td>
            <td style={tableCellStyle}><a href='/Color'>Color</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/ContactUs'>/ContactUs</a></td>
            <td style={tableCellStyle}><a href='/ContactUs'>Contact us</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Desktop14'>/Desktop14</a></td>
            <td style={tableCellStyle}><a href='/Desktop14'>Desktop - 14</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/DownloadAppNow'>/DownloadAppNow</a></td>
            <td style={tableCellStyle}><a href='/DownloadAppNow'>Download App Now</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Font'>/Font</a></td>
            <td style={tableCellStyle}><a href='/Font'>Font</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Footer'>/Footer</a></td>
            <td style={tableCellStyle}><a href='/Footer'>Footer</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Frame1'>/Frame1</a></td>
            <td style={tableCellStyle}><a href='/Frame1'>Frame 1</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/HeroSaction'>/HeroSaction</a></td>
            <td style={tableCellStyle}><a href='/HeroSaction'>Hero Saction</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/HowToUseTheApppPerfectly'>/HowToUseTheApppPerfectly</a></td>
            <td style={tableCellStyle}><a href='/HowToUseTheApppPerfectly'>How to use the appp perfectly</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/LandingPage'>/LandingPage</a></td>
            <td style={tableCellStyle}><a href='/LandingPage'>landing page</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/OurHappyCustomers'>/OurHappyCustomers</a></td>
            <td style={tableCellStyle}><a href='/OurHappyCustomers'>Our Happy Customers</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/OurReativeTeam'>/OurReativeTeam</a></td>
            <td style={tableCellStyle}><a href='/OurReativeTeam'>Our reative team</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/OurRecentBlog'>/OurRecentBlog</a></td>
            <td style={tableCellStyle}><a href='/OurRecentBlog'>Our recent blog</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/RecentPost1'>/RecentPost1</a></td>
            <td style={tableCellStyle}><a href='/RecentPost1'>Recent Post-1</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Tags'>/Tags</a></td>
            <td style={tableCellStyle}><a href='/Tags'>Tags</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}