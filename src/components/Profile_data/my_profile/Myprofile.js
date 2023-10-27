import React, { useState } from "react";

import "./myprofile.css";
import { PiPencilSimpleDuotone } from "react-icons/pi";
import { ImHome3 } from "react-icons/im";
import { GrClose } from "react-icons/gr";

const Myprofile = () => {
  const [edit, setEdit] = useState(false);
  const [address, setAddress] = useState(false);
  return (
    <div className="my_profile">
      <div className="my_profile-details">
        <div className="my_profile-card">
          <div className="my_profile_card-image">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA7VBMVEUVfqv////v7+/u7u7y8vL8/Pz39/f5+fnp5+fr6ur19PTi4N8Wf6vs6ecTf67z8fAAfa8AeKoAcqMAdang3dsAbJ0Ad6cAX40Aa5sAa5YAbKAAe68AZZQAc6dMeZcAcJ7Sy8hLboMAZJhlgI8AYopzh5PP2uLc6O+1uLnT1tcAXoRSfZbJzc6Ll56YoKSDl6Kmqa3HxMN6k6M8b4y7xMnn39oXaI0VYYFhfpGztLcnc5k/bYhWdId9jpizv8e8wcOSpK9ahJycnp2dqrNkfIkyaoZYeoxIdo4AVX46dphqhpY4Z34AYIKjtL2AjpPT2kqnAAAXQUlEQVR4nO1diXbiuBLFCK8EYZstEBJIAhnoZg0dErI06UknmTDz5v8/50myLW+yMbYgOe+8O336dDSOXNcqLVUqlXKCAy1vo0CLnBIg0SLgFIlOiUyLvmRV+dyXFOv/DP/PMJKhCvKq6q9LwX/8dVlF3rrQLwHVL9YXqMp67n+5DRVGG+5ZLPAZH8vDUArXVXCK5FBdebcu+sY4sQoFWRYlTZLcqvJpq0okFYOhUlSLCv5LLThQcVER/QVokVK0nlPyTglQyCPof9CHgFuVJsmiUAZqdTQarVY/RqOrqyv0z+EQVaEATSslr2onqWRAgLpmTqOQJQT0l0Z/USM/o79oSUFyimhdeef3JPcpUiQiCPLNfDW9O1/eN5vHtdopQqtVO641m8vlw+PTy7wrC6Igalp8VbtLBSTZRo4qBm1zMdwbJNrmrq7YRUAL9wZSlVT9MdvcfrtonZzoei4EmNP1k0qr1finP/45LGmiHF3V7lJ5emR6hk5JQCyQL0iCpKyuv9+bZh3CMDcfjiA0TLN5tpkNUXNlZ0jp7I+hIN2sp7ftGqvdIgF1/bS97K+Ge2Ko4j88GGpSuTh7W3aMrU3HYokac7l4GWpfmKFQmt3d1/QU7Ny2NNu/nm88c96+tJQsgfx1WUXeuqwFFmVYGv3uVXZRzSiWRuNxXRS1bFL5GIJsX8tiWJy8N+sZWs/HsW7eb0ayjAZGLm2IGKtpGHpni+F1z+TQfB6SZnszKItcZgt3ahVtuDOpUyJK4SI6A4vaaNM0ODWfh6NuLmaKnFaqPP1Fz8ob2PCscZ0iz0TlgH6jwdsxL/UMQK8tZrKcTipNdYoy2hbi6PyYq3r6AVu3K6Sru0pFPoPzWDaGww234SWCot55X0u4d+3IUFN5MCxN2/z7Xwh663KIRhBODJWQvwCNtGF/gYqGcUGeLQ/AD8NojovSNqlU1efFIAzVLG0o3NzV9tgB/YDmx1xIItU2hmqYocqsC8jlce9g/AjHi7tinFQAJNJSMvGHGYIQQ3n4Zh5GQV2KxnIdIxVhCEIM8fotOB+q4ZlHCcw8mjRpG4flRzjW+uUYqawi1nzoNKbr1xFpEX3e56Wq3h26AW2K9YeRVIiSykIhTGd3C3h4u98pMAZ6c4zmDaZUQYapbfyCPG4fdIjxA2lqSQtLxY8hkNXLz9FQStE4q6ZgqJIp3MMQ7xSwGMrD98pn8sPQe2sqVd6ydv0WMCYTZAjwHOFliH9Ei4QgQ6nb+4QxNAjYfKFSEUEVH0NgrbnTaCkQ1r1P1VAHem0s7qMfFsRx+0sQRDi91GIZqt65P4da2dq182op9vcjeBmKz587xngBzTfJ1lIiqM+LoWBF9cz9OSkRZHH6dQgiipVfQIiVF9B/JvNiIIKtL0QQwXhAHKigLC+GI3wi6ykvTGtfi2Aud3JXFlyGofFlNxu/ID59sRZEOKo8gBQMQdB6sib6L9UHKYw7zcMQ+K2nQgRDsiAIMATC+EsSzOXMS9llSNZhLkOwgxdDmn2ZeTAAaF5GamnZNuf9DBUGQyB2l1+UIPZtrJwWU4MMFYaWAns54GUIpG7zyxLE1tSLpw3VbV6MsJYW8pL6+onm4HbozZFAvRLAY/97xlI6WfpWbRYEQb78dHMpHvC1pPlWbRbyRTrObll5j83PprANlctygWFbJGU4/KrDqAt42hdSM9SG3748Qbw/tZLDDBXJy1AJWk/WvFGQ7viNMhAaBDBNmMaWqpdDD0N73vAzjGhDecKrE0K9tfz++3f/efq46B0bWaI1WDDu3MVa3l7KJNFSec6pE8KTzt1AIVFugiwpq+nZMkGw1C4vqL34GGL5q+XtDMtnfHRUbz/OPTE3COXhz/5t+4QfR9irehkSLXUZEne/qobmQ+GyfsTj5Z2HtcCA2B0/NE1eLam/29+wQKig+dDThuHIBo0oVPeCy6ub4zKLIAaYPy2POW2ymhPBH1Ci0BDV4LoUqStZtUnfeeiosRhF8SMora+XXHZB9EaJeDzpkFMq0lWby9C3LuWxmMG7DLEEMYpjLpvl+l0572PIsi28DEscLArYeorUUC+GTw09e5evrWSQgCG18TfZ3fewOUvCD6P6nt2LABdofZqEISAMh+3sBFuJCQqCysFZWR/LIMBQidTSModhptZPThBhmr1b9IratjakXoxBJzPBk36iPuhilpniKWrEIEMQ9mIoeLbIbtfDv4ZMHnGtmFVR0Qo8H5gtiBfDOZYgS865C3FymplgZ4dO6KBvZhxRjXPBISMqqsOH4cUon2XuEvr77gQF5SOj6sBGVXK8GLEr75dW5tmpEb+UicAq6+bISZ8Ol0oMQ+khcy/UN3IEiViIt1l7YnPoGBdxbbjuZFVSeDxIQxCNpxmXikfm2HF/+9vQ58UQ3zIvZ/RvYhSHeJQ+MjditWDFYsS04bCRlWDOuIyisA3XWTtIfSbmwRaG19lXpGmmCguzWsZX64sCQ0uxXUUjhor32Y2KDtOqT4Ji1l0g2J7LwZGGBFy6XowVB7uwufN6xoGcdTTNGRvLCeNpQ1q7RsI2OGzEwPsqU/wEEO9OOL0crdqYkQpSl4MHES6KUQy2MnzKPAqYlmeRuX+IfpKfsn5DzPA+NUNhmpkhvCUVRflpVC4+0o/0DJ8zb+ahxSmuKKIN5fUxB4JZGGZvw1xlEs0QCNm7QY6sDlMz5CCA/o6HUcDyYoBCiU9QwucytD4w04sBtG6dA78sDMU+ByUy8ZKKfd5CfOYTApx+TSPz8LQb71YbOvOhmzRCls/57DaZq9QMFxy6CZqtZKSQrKwReU5RzuYkLcMiFwnMtZYvMveAB1lX9jbqu7lKPRhw2ZQ1pnLELjeHyYgAvqZlyEmCdymwy23nVNC4bKghwG8pCYq/uEigL4sFfxtaDMUqrxA92NjR3+2glNWfaL8fGYkK42SX+INb6EXjJh3D6j0fAVBH9DG0zzQJ3IJLjId0BIUipzBB/ZePoZM1Qnjks6JB9mFqC5hTGB38KKkuQ5p5QfiHUzc8TT0dCiqnoeB+CLRw1gi5wSlA6HgewyEeclaHqQ3zSmZkjbhpcakcjWTd1AylV04MX2RGrP4g+4aMhVZKnz6CxmndWO+LDIYTDi4ajKPT1A5hQeHUD/VzFsPMHnVafeplqTA/5jQW3JIdGv95C3nDjeFbyiUNmi0y7z5bgA1ykt3PUFnyqTyTN5HbV27NCyEbX2lyqjyDjV9acGM4sHZowH4YprYPR9xkqEzocUpn5V0Y8mMIv2nb2bDwxO3sgz6llToMy1e8pkN8QODPVASHf3ELG/ZEErgMOR61h400PbGcPUSCQt+EvBjlK05OGoJUPXGUPVyQQn/07XLjaUO64nn+R1+kiFX4l6MElmufMiQm8BXPI1xwuT04OIR3nqfkzkKRCny1FHZ2ty+KnOwKSwAWQ04WvgVjdyt4nT3k04WXoZ0hIs+1DVE/2Dnui5e3lsDL0Emz8AfXo5Swt2vsHrjl+v6zshzMGvEHp2W9jcp4R4YzToaTBXhWCsVi/MH3tCj82G00ld74ZnhFDIMWMF8txRtAOzHkt+gmYDLk5IhyUH/ciWH2iEgfDtGG8GKXKbHK+cAxfCdeDOBjyHekwSeRpDhOPvA8j2u9/LHsLNY8WsrNerLRTu5VHHCJ4/FAv9QY/ZA3Q/016XBaWvJO3KBf0xPplGGR72CGYbzE0fJgzD0NnD6laSOd8xZ5jl4Mil6ywWbNdbInqLvrYuqnKXLanfRCTxSHOeKuo7lcyw14oXvA6oL7a5CeviVgeMufoHd3iDLUuHljvTjdujwVNxXeQxxe+Jf9WQXxsFPmtm/he9XWg6R7ybIFbyU/Q3IfBK+9p8C7juMpjveSJ00/F/z7+BgSt/1DP2IpalPeKykL9b4cjomSbvaUiyZGUctve8p0Z754GLopBznt4/uA+7Z+HHEsH00Te1GbHOyMPLEYNGuEkPk0R/hN9yRABp6+M2JqtXGTjG17SGsLm0MNhLNGcIunodC/jcpW8nbYGAdibLTVg/V/mv0z7qMp/ChJjF1ufjFRNvTbER5LyJIM1pvjKu0aUnW2sGgZ92uhxD3vpP5LZGWGlEY8HZY5iFqQ1DuzlBGazV+TeffmpjuY/lpa9yrA0wfctDLvLPaVCTP3pZT5fKMX+vGDM7zMz2011E9ajUaj3bJz70C98ac9L1d/87xKAraH7OyeXMLI7XcYy4mbXbTcb9qkjiDNhAV18811VsmrBb/eCHsFi2HwvIXILUbYaPT9A8voLnBfi260FwOfl6M0XhqcJg/scGe2oTTi4m6DleVbyGgSq+Nlp6JDgnrdXNzNQzvhxfHC5JIGzHimeRP9WSPyKoeYK1jp9YdMF1R18PR3A+Pb+e8fbLux9POhweHqtvrad6LEkzVCfsya1MCovc5inTOlm5v4cKKb2XszY4+Ey6IoI3OQlTXiJcucj4aO5dtAiZU/CcrDf+8zaavxLoA8K84bFWXIxoqHjknq2OAgydV5+hny6HQmRjIU08XKo7GjefbUTe4A3g6pe32fVllJ6ogIhsJTGte+fnH7NEqxb78FxfFtK41Rrt+Ru7l8DK1Lu3FRCqep0bxLHxO8Bd1+imsHKxMpxNBtw/LOp9c6jyOe2hmAXL3eVVdhoxpuQ5fhrieN9V76iOeEWL/uKNI5CZ5lnbcgRaWdDP36Ga/RMwbqZierrvNTDDDEU6HqZlHaZdKvPKY/tL0LpjusJtF0TzbwPQxpPSQgU/6RPOjEE1m1Z0ySK+rJk80m8pbOHSKTOqmSQaVB8r4D23OHIcO2ID+LifNGGJuUmYRSILGDRf9b3MZQKiaMgUQKfzCCydMc1p09p2iGQL5MtiI0pmxh9oNBsi1G+OEMDREMceyCNkrk+4bNA0wULsREw8PR6TNlw/Ji2LELcqI4z/rmkAQFYZbEsINLarzF3aQjJwqMyHAELxUSJcX1BNNF39KJUE4QYuaJbjwQEpxUgD3XwvHc9+TNGmFBGGzPX3iaNMyCGxIEvtX7AmWjMrNG2BDFrT3RTYJ+MJS3psyA9yX39vhI24Iw1Lb69+HfhyYoCOMtSxGcNNGTdT7+plV5Wypoc9f4WA7oXsQ3IuyBSIaqJ+ceYShtuZskS56k9Niyv9nBy5mCc+HzFoZgS1j54UdSjN+xU+LJo0QZqpG+NodhvhAfS2c8fQJB4WfsfNEmlk7SfohMjLgslPA4dRKhLIiNvDOexGiG+E42EGAItE300PUJcwVGOWYSg/9Y4hecC+I9DGnWCHo1hEx+qkZv08CHVGmCMyM6tSrs/BSI7JrDRmVkjQje0vkcqfZG/3C2rxezyAVzpS8HbulUI70YeXrvmngX9cnMvbsQ2VCi5jC4rFoBszve0hmVEDbNwTQu0CICDeDxi50Cevsdlj6Gwortb0Zf7MDUbETlk6s8ObIH7rBkMCR5r93bAdm+2FQp5bmAnRNQX6jWRVYgeIfl9ls6FWb4bvp0bFnBPKIIL+aMWzqJByPEUA0ylJnxirX0uUsyYsQw9GFt4ty0GmIY0lL7clLPHZbCjJGC/lOW3QSs7KOn+OS9lbAbzRB+LWV6MVT/rdUyw3mwzL5XnxIM09y6rcsNIaWiK8GsEfm8u2qjReh56T3Yu/Xvn2FYWNgEzQt9iXcLvTen2j1NSXpLJ87qEqCoX6bMesEBwSP7sLkmlxbTByJueIxlKJQClufJQZ3dfqz9Fg9sdK1hlD6w8z2kBIF7EE8O7mZzETCgzLF9dTh9IIKhGrKeVDIKOdGFK98g3foU49CCP5LidOoMGfSBgnP0wM+Q3KjuY2jfVe6UrL0UWwf2dnuheg5nQZMu1nxtaN2iupOWIszcOGXY/qRVKYY3VsS81CydVFL3Q8Vl6LlRy+s6PzjKNMwAmv+KstMUDIbe+y0QE8ZtufhIostQFl+c4Qb+8znmryUaPZxlXoqCc7mT79ZqlWxYeBlKiSDTVrTvHvgkjG2GqA/KsfKW1FDWiJAXQ8CrNht4+rQpfp5lgWEdzsKDTMGSykJ41RZ1g4e14qFFtI+SulZEUXfMJMAZMxxao7fH5YIjFUHYetp6S6cFP0Oh+nBCLhf9tMFUIqOB3lyJHqkwkjMEfuspbxc5dam3dRzJnT6Lbjaol9gC1pdrMR9mSP7scA+phXzeinqjdYH+Kf6IvU9Z1gxuK/iYzdnQcTv5GKpkJeZnuN2LEdBSBJkcOIOd/sHtC+2FvLm2KUkhqaK0FAQZKmGGSrAuefANv8h8P3Skwh3eeocXE9n+7oqPoX1n/BYtJYyDWkra2luXcLMgmtp+OuDapjz7C3/X+nIusDTLbkM1dKdzwIsR1lKaIZPWhfq4BF7wzAjrHwfrjd3v2F0EK3eKK1XeL5UtqKcNnccYt3SKtIi+IrA+Wi/wxpRe2xzEJ1Wa9shh295ELsRJhVFwSmJv6WTYFlJgjatekwXOyXK6d5+NPCBuFNTzq+IWqQT2yjsVQzR09ypYcczve96ludmQmD29MSlL4KAMhTKZN47g6d+D/bVj9+GCKGj7ruQOMCkYKgzrSVUDdSmWV9ktkuffSeyU3nlb7+dAQve6Q45bGM2B5Hx3r00n4SlDxQOMh6E9b3BowwIQxdWriQdxvXW+B45d6+Qp1Btj4EqlgpBUarAN1YQMQbguvz6AvKxO7g2rHd8nRZ6WsTJ4I+0HjeZGcaVSEmnplntI4xiGPSJCsX9xAo9yEJrf+twi26uT15r15VqPTqUJNYvRDwFQvLd0Cq4XAwT6IfZrhGaeglCdLk0y5pxcvPI4n1caPDQq5Ay/0fzt7jazZ2lru97vxQjOhzRrhOSEMdAoBpHGaUjhIhq6gc/4vho6tM5YbuZKhkANsTB/WnSs45X15uVIFuSUUilKOGuEZrc5iLMtGKt4GUhiafLeInJBvdY7n6Xc56+u+kv7zLd+3LPyTKSVKuoOS4KdGaLXS9pgc38KLZL13tt4ruy0MC8rw9n70jBy0Dqw+WsGskmVzosRyRBDLBefb9tWZgGkrs3mw3TVTWZF3szHj8umc/ZXb317GlFN581wm43Psqa9ftnu+OGYSnpiNv75++k/o2G1xOyaYqk4XK/Gj98a7RPLSQjhyfFHf1UW3C/DlsqSYauNz2QIgnWBEEMQwZDoFRiiocIwrNwQEMKK2em8Pvy6Ho9Xq3m3WCwqxWJ1sJqNJ9eb949mxzTrJJEEzidhNJf9gaJJBc94yZRKwVNegCFgMAyft8iipZ6Javif/rJXI8NrDrs3dQTTrLUJeuTvY9M0dJ1Qs54w28u7525Zlv1VcdbSJF6MsL9ABvZa0LMJIKvV1dNHE9HADUSyXeBVgQdHR7ZeQqPeaS42k3lBdCdsL8NQhAiLoRLBECSy8fOePX5WG9I3ulWBgizLpeqPyfS10Wi1dKu57Ca19z9Q4Wmr3bi9e14PS9FVhRkmksrjxaDHLFSgqBbcQwuKXQZokaKSJZDnoTwuwiUKLSrgX0FrC01Gb7y5Gfx7eX62bCIctxCOj9G/7hfnj/9OujdlQZRlSaJVWXCrAqoakspBPlzkFEhFRQpmjVAVxamt6ACRtsoUWgRwGS4tuk/hIgxPiUoMMICfUhQVlJSyUhwiXF1djUajIRpflZIG8LfwVoXrxbUr7vsoqtVut4r+qlbdoi4uw//RIutH/CDrdkCnyI02cTtWjAa7vYH+HiNwRXDrwhtChULCqlyDJY9WYOgRb1UFKU/+c6sSyY+St6r09qFT4s5d4JOqArFV/S8wjK/KzhqhfjGxODPMH5Rh3tlR2FJV2HvEksr6463KKtmXlhJnVSBwxbrHNVCV6q8KWAE8Wz+WGpLK+sW4qqx7SFWGWEqgLsv/5mNIJgWvWJYvJXB0I+AgY36s4IdnMsRuta3eI4aWAgbDfWpp+qpIC+7M8L8zdR5zbDjhyQAAAABJRU5ErkJggg== " />
          </div>
          <div className="my_profile_card-data">
            <div className="my_profile_card-editicon">
              <button onClick={() => setEdit(true)}>
                {" "}
                <PiPencilSimpleDuotone />
                <span>Edit</span>
              </button>
            </div>
            <div className="my_profile_card-details">
              <h2>Nykaa User</h2>
              <p>mobile:9539848397</p>
              <p>Date of Birth:25/03/2001</p>
            </div>
          </div>
        </div>
        {edit && (
          <div className="edit-section">
            <div>
              <div className="edit_close-icon" onClick={() => setEdit(false)}>
                <GrClose />
              </div>
              <div className="my_profile_card-image">
                <img src="data:image/png;base64,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 " />
              </div>
              <div className="edit_form-section">
                <form>
                  <div className="edit_gender-section">
                    Gender:
                    <div className="edit_form-slection">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                      />
                      <label>
                        <i class="css-16qntdw">
                          <svg
                            width="14"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0v1.333h3.73L8.03 5.031A4.967 4.967 0 0 0 5 4a5.01 5.01 0 0 0-5 5c0 2.754 2.246 5 5 5s5-2.246 5-5a4.967 4.967 0 0 0-1.031-3.031l3.698-3.698V6H14V0H8zM5 5.333A3.657 3.657 0 0 1 8.667 9 3.657 3.657 0 0 1 5 12.667 3.657 3.657 0 0 1 1.333 9 3.657 3.657 0 0 1 5 5.333z"
                              fill="currentColor"
                              fill-rule="nonzero"
                            ></path>
                          </svg>
                        </i>
                        Male
                      </label>
                    </div>
                    <div className="edit_form-slection">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                      />
                      <label>
                        <i class="css-16qntdw">
                          <svg
                            width="14"
                            height="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0v1.333h3.73L8.03 5.031A4.967 4.967 0 0 0 5 4a5.01 5.01 0 0 0-5 5c0 2.754 2.246 5 5 5s5-2.246 5-5a4.967 4.967 0 0 0-1.031-3.031l3.698-3.698V6H14V0H8zM5 5.333A3.657 3.657 0 0 1 8.667 9 3.657 3.657 0 0 1 5 12.667 3.657 3.657 0 0 1 1.333 9 3.657 3.657 0 0 1 5 5.333z"
                              fill="currentColor"
                              fill-rule="nonzero"
                            ></path>
                          </svg>
                        </i>
                        Female
                      </label>
                    </div>
                  </div>
                  <div className="edit_form_details-section">
                    <label for="fname">First name:</label>
                    <br />

                    <input type="text" id="fname" name="fname" />
                  </div>
                  <div className="edit_form_details-section">
                    <label for="lname">Mobile:</label>
                    <br />

                    <input type="number" id="lname" name="lname" />
                  </div>
                  <div className="edit_form_details-section">
                    <p>Add Email</p>

                    <input
                      type="email"
                      placeholder="E-mail Address"
                      id="fname"
                      name="fname"
                    />
                  </div>
                  <div className="edit_form_details-section">
                    <label for="lname">DOB:</label>
                    <br />

                    <input type="date" id="lname" name="lname" />
                  </div>
                  <div className="edit_form-button">
                    <button className="edit_form-button">DONE</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="my_profile-form">
        <div className="my_profile_form-heading">
          <div>
            <ImHome3 className="my_profile-icon" />
            <span className="my_profile_form-heading1">my address</span>
          </div>
          <div>
            <PiPencilSimpleDuotone className="my_profile-icon" />
            <button
              className="my_profile_form-heading2"
              onClick={() => setAddress(true)}
            >
              add new addres
            </button>
          </div>
        </div>
        <div className="my_profile_form-feild">
          <div className="my_profile_form-address">
            <p>No Address Found</p>
          </div>
        </div>
      </div>
      {address && (
        <div className="address">
          <div className="edit_close-icon" onClick={() => setAddress(false)}>
            <GrClose />
          </div>
          <div className="address_input-section">
            <label for="fname">Select country</label>
            <br />

            <select id="country" name="countrylist" form="ctnry">
              <option value="volvo">India</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>

          <div className="address_input-section">
            <label for="lname">Name</label>
            <br />
            <input type="text" id="lname" name="lname" />
          </div>
          <div className="address_input-section ">
            <label for="lname">Mobile Number</label>
            <br />
            <input type="number" id="lname" name="lname" />
          </div>
          <div className="address_input-section ">
            <label for="lname">Postal code</label>
            <br />
            <input type="number" id="lname" name="lname" />
          </div>
          <textarea
            placeholder="Address"
            className="address_text-section "
          ></textarea>
          <div className="address_input-checkbox ">
            <input
              type="checkbox"
              id="address"
              name="address"
              value="address"
            />
            <label for="vehicle1">
              Use this as my default shipping address
            </label>
          </div>
          <div className="address-button">
            <button>Add Address</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Myprofile;
