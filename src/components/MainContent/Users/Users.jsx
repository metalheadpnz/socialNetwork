import React from "react";
import styles from "./Users.module.css";
import * as axios from 'axios';

function Users(props) {

    if (props.users.length === 0) {

        // props.setUsers([
        //     {
        //         id: 1,
        //         name: {firstName: 'Andrey', lastName: 'Programmistov'},
        //         status: "i'm gonna to be junior",
        //         location: {country: 'Russia', city: 'Penza'},
        //         follow: true,
        //         photoUrl: 'https://cnet3.cbsistatic.com/img/zKiT35AfPlfRJvlHty6p4zmpCrw=/940x0/2020/05/01/7f0a951f-d9a2-4847-b962-b254b63842a2/img-4960.jpg'
        //     },
        //     {
        //         id: 2,
        //         name: {firstName: 'Sanek', lastName: 'Ronaldov'},
        //         status: "i'm big boss",
        //         location: {country: 'Russia', city: 'Kaliningrad'},
        //         follow: false,
        //         photoUrl: 'data:image/jpeg;base64,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'
        //     },
        //     {
        //         id: 3,
        //         name: {firstName: 'Mixa', lastName: 'Shinnikov'},
        //         status: "JDM 4 ever!",
        //         location: {country: 'Russia', city: 'Penza'},
        //         follow: true,
        //         photoUrl: 'https://a.d-cd.net/c4cb181s-960.jpg'
        //     },
        //     {
        //         id: 4,
        //         name: {firstName: 'Billy', lastName: 'Micro'},
        //         status: "Window is good",
        //         location: {country: 'USA', city: 'Seattle'},
        //         follow: false,
        //         photoUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMVFRUXFxcXGBcYFxYYFRYWFRcWGBYXFRgYHSggGBolGxcVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFzAiICYtLy0tKy0rLS01LS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tNf/AABEIANkArAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBQYEBwj/xAA6EAABAwIEBAQDBwMEAwEAAAABAAIRAyEEBRIxBkFRYRMicYEykaEjQlKxwdHwM2LhFBZyshWS8Qf/xAAZAQACAwEAAAAAAAAAAAAAAAAAAQIDBAX/xAAnEQACAgICAQQCAgMAAAAAAAAAAQIRAyESMQQiMkFRcaETsVKBkf/aAAwDAQACEQMRAD8A9WlFAoSqiY6UZTAnIAIKKakgByCSQQAUpQKWoIAMpFDV3TdQQA6Uim60gUAEJyACRQAQkglKYDkEJRSAS5q4uumVFUN1Ge0NDkCkkpCEEShKSADKKakXRdADpUNXEgbXK48TiZ7AKjxWb3hsW+aoy54w7LIY3IusTjgBLnAD6qixvErWnygnuR+i4Ktdz3bHTzdy+qos2rPvp8oEX5lYJ+TNvWjVDBH5ND/vEfea8dwBH1KdW43ptkW1RPt6BeeVBfVuepP7rkdiNZ0tvNvXrfopRyT+ybxQ+j0V3GJDbsaSZIMkiOUiVFQ40LiAKlMHnNMwe1nLEZbVN7cnDsbEKvx7vPLPcTB7H19UKUm65CeOP0e35LxKKpDKga0nZzdXhk9L/CVol4lktcuaYLtTbxsdx/legcOcT6mtp1jfYPm/o6ytw+TT45H/ALKcuH5iaxBKe9uXQohbzKBFBEFAChRuCkKjcoT6JIchH8uigpkRJIhIoAErixtS8LqqvgSqDNcZoYT950gfuq8kuKJRVuilz3NC4uYw2bb1K5aYPwizZGp25cY2b3XKaQloLgPvEmfW/VWGVPD3PqD4RLW/323g7LlNubtm9LitEArka3OsGxF50g7eriuGrhC4GrVMNIlreZ9R1XZjXguawmL6iPT81HmddsQwA9C7Zo5n1VbRMyGYgk3s3p1F91wsw9piOnQDstJl+CNV4mb8zvH6KXPcE0OLW3kx7CP2U1krQ6KNjtDWcrSB0jqqzCVAXv6vk+4j9irfH4eTIm4DRygAXXCzCQ4EDa/1g/mpwkqYmiyy0uYRUHW4tdpjU1XOAxPnjaXQOvUSqzL6cEtduDHY9CrRuG+7HxRpPR7Z2VUnsZ6Hwxj9bXMPxM/Iq6BXneQ5gabmVLaiNLx1g+nZegUKocA4GZXR8XLyjxfa/oxZ4U7JEkkgtRQJRVN1MN1FU3UJ9DQ5JJFWEQJFIIoA4sc/YLIZ9iZcbwBYek3K02Oq/ESYAG/SFg80rlzXi8yTMWgNJ3lYvJlejVgjuyrFd1V7yCYHPta3or3Jnksa2YEzvyCzGUvhpd0gC2+6scux8OAcSBaT0bMlZNGprRaYtgdVBc6BpmJiG9+5hAtFRvlbAtJ7cgFn6OY/6iu+o67J8rYjVFmD0Wny/DmBJEkSQ3Zp6KMo0SSOfA0XMcXNZqAkTe3yF1FU+1qwHaQBc6ZJdNw0chyWjxFdlKn4THCRcxeJ3v1XLlOFs6s4QIIZytuSepMqFDM5jcF9qWC4GkRG0i/dcDsJsI68u9lrMDR1ufVcL3jtAgLiHhg3i0jnvMppWEirq4SGsqAy74XNH9okH3Bj2VlharXQ15sQC123xC1+s29lDTgVGA3FSW+kTf6KSpggQ2kTEh2k9DYiPmpJCaOw4ZrWyCAAYPre/otLw1iJJZyIkXmCLkLB4DEOYamGqkkgWPJ7HQQR3EhaDhWq4YkMM7SDG8s2+UKzF6ZpleSNxZu0YSSXVOeJQ1t1MFFV3Vc+hoekkElaQDKEpJpQBmeKKkYbER8RbA9S9u3tKwILn0asj17NET+a23GVNxpaWm/iMPsHSsxRcwDVP9RpYW8pMEH+dFz879RtwL0lTiqfhsa3qR8myqivijDyAL+WO9v0VxxW7T4f/C9trqpwGVPrPaw2Bl5vuLyfkqlXbNEbZBgKri5rWC/5legZW4U6Rc6alR3JokDly2KzuTUizUaLaQaSQHvaXuIbI8rQQB6krS5fmr58F2LdrgkU6dNos0Ek+RpAAHdQa5SpFj9Ks7crAqWcw02nsNR6yVYZjRq1HMZTaBTAm+5AiJP6KbMhTfQa+jWqNqFoBA84dIPmLXbn0IVNw/xI1hGHxOIIqOqMYw6pFbXIa4CHeEJBBvEhS/jSfF/oq5WuVf8ATr4hwNVuHAwzS4uJ1nblaCfVZGnw/XLqeskgXcwGDa8Amyss4xlGrWGHo1Kmpr3eIS6rswxFLXDXNLragIhW9bMsPQwwpvoMc11QN1uOznzLnPfsBe+yFFOVdEuTjG6szed4R7XMdpLTJIuCGtA7HuqjMM4c97OQY2el4H7QuuozC16YqigGNqSG6m0zO0w4NVBjMrFONAgyZI8oNvvDaEoJJ0yxq1Zd4TFtqhtV0B1MgHuwuE/JWOaZg6jVpupuuzzgcnciPzWXwILG1JaQNJlpm8H4h1B3BVjXPi0dc+akLdSJuPkZ9k3GnRXp7PZsozBuIosrM2cAY6HmF2Kg4IDf9FQI++wPPq+5V+F0oNuKbObNJSaQlBW3U6hq7omtCRJKSCSsICSKCBKAMzxWYNN33RUaT+X6rEZ/hiwh7LtLiD2vY/Vb/iNoLYPWfkQf0WLxOJkEO2M+ki7Vz/I1M2+P7Skzj7WlQfuJNN3/ACExJ7wp8vy/UGsYRoa8PDTId4gFw54voJHw7XXNhnta803iWVOpgB3JwPIgq44cDpe47Bw6TN5HzCocmlo0pL5IsvYX0muN9TQXAWh33hPrKsqeEw7tHiUtWkENGm4noRfmu6jgdDT4bAS55d8cQHAlzQCI+K4uN1I1tSf6FWeceGb/APuqHKSlaL7TVMPiXBDLD4QTsOSbwxSJrV6xc1wc2nThp+HS573ajyMviFLUoVXM8tPw+rqjmiBzIDZk9lLgmNpgU6ckDcndznbuPdLm12RaTWji4ppgOoVi6NGun2+10jzDpYH5pMqxADKbgJERY7iRK7cyomQT8JBDh68/VcdDKqwaAys0tEwKjNRb08zTMeqLb6HGktnLiqRcC0MAB+QHayo81y8uY7Q0nS06iASGyYBMCzbrTPy2ud61Ntvu03E+2owuatgdAPmfUdEC4GqeRaBBvCcU+Sscpa0ZnE4oCo02/CRuCGgCPSy5spY5jnMPw1Gy3/jqIj9FzZthX0sQ6m+NTYsNri8e6suFqLq+IuLNI5QIaOULVWil67PWOGcL4WGpM/DTb+QsrYLnwohjR0CnBXRiqSRzJO3YlFVN1KVFV3Sn0JEiSEpK0gJNKRKRKQFRnuGLmEjkCV5dmbzoPJ0wPW9yvYq7ZaQvP+NeHj4fiU94OpsdJMiNllz47do0YZ1oblGRYfFMZUafNp25B4MEOB7ifdWWZ0tDhYDVewgTF1geG+Kzgaj2PY6pSfpcdJ87CALtne2601Li1mNrinTYWtZT1AujU4l3mtyABWWUGkbFLkzR4B83MfwK0ZVa0Ekf5VNh7fJdtP8AEeQnt7qiMq6LZKyTHvLmQBHMBcGExDWOBLSGkiXWtHIwugYthvqbB7j6J3i0SCJbJjci6VcnbGlSqgZlj2OswdfSISyt5DANu0yoqj6IsCwH1HK/6qNuJYL6h7EIlfKw46qixrOkAqrpf12AR8QPbsuytBaDf+c1luLMS6nhar2Oc14ALS0wQ7UIgpx9UkhdRZ3cYUmBjHljfE8UNE2JLgSfVo3R4FwIDn6bwYnvAJA9lg8jOLxlQOe+pWqlpDXPJLKTTYvjZp6L2HhfLW0KQY3ZtpNy5x+JxPVbYY/XX0Zss6gXaKSUraYhwKjq7pwUdQ3VeToEPlBJAq4rEUJSSSGJc+Mwutsev5FdKSVDWjyDjrCNZi2RT0hzNJMWmLRyWOyvHHC4ym9xOgEsdYfC+WmfSQfZe+8R4ajUoP8AHEsAkx8TSNiI53Xhn/g62Yvf/o6T6jQ7TqcGsaOhc421RFlQ4VKvhmmGTR6rhX9/8gqwo1mgaXCZMQRIIO8rE5TWqUKNPxL6WBjjYgOZ5CJBvcbrRYbFtdefzXMkuLN63sidlTcO8Ppta5m+hwkCbEAlW+Bx9GBqpMa7TF2SNu3dGozUOtlz0qDmzoJHXaPqiLpkmoyWzoxONox5WNkNi1PsI6clQ0MvbWr+K8ANtppiNIgRLo5q0q0qhHmdb0ulTplgJHzt9USlscYqK0SZlXFmi23osBx1ifFNLCtd5i4Pd0DRYT7yfZabFVy50C5/JV3DuE05jWd4VV5c1jQ8N+zYSCHanHt0VuCPqspyOol5wdkDcPSLGHW551PqAyP7Q3strRpaRA/+rny7DBjIHO/p2XYulCNI585WwJIpKZASiqi6mUNbdV5PaCHpQkiSrisalKJTUDEnSmkpOMCegSGimzfGQHmC4MBMAXMLzrilz3Boa806AcS2m0gNe8nzO1NPm9FucZUMQDBdI3gxBkjrYhYfjF9Mmiykxo0NmaTYDw4RLgOY0kyqou50XpVGzr4GYHYOmzlpcIMfjMqSvhHUidJt05IcAmcLT5b/AFcVo8dh9QXMye+X5Zvi6S/BHkeaCoyOYsReQQr2kQBusNUwT2u10zpd9D9V00cyxQEEM23kzPeyjF0SlG+jWYgi/Kypc4xmkQNzHzVbUxeJP32+wKZgcI5ztTzqP+UpO2CVfJ1YPDaWk7zclcuB4zbhcSaNVjjTGmagBlmomXEA7QR9VcVxDVjuKcJSdRbWFMhzKkVnA3qML9r2EAG/daPFrnspz7iewU3AgOaQQQCD1B2MKQBYnhXP3vdTYaZbSNMEO1Bwg2aD0INltSV0YyswyjQSlO6BQTIjpUdXdPBUVTdVZPaND0EpQV5UFIqGriWt3I/nVZrNeN6FOQ12tw5MBd83fCFJRcnSVhaXZqSVzY6uAwwd+ewA53XmOZcaYip8IZTFrwXPv6nSFls4xr3sc573PIB+Izud42C0R8ObVy1+yP8AKk9Hp9dwqv8AIQXNB8NwPP75BFuYCqKpNceNSoinUY3QahguLRNulpKpnZhUw7g1h06GOptEWDXhs7eylbnZbSFFh0gkybl8ECRJtBgrAsbu7/Bq56ouOGaelkDYE/mtHuFmeG8VqBbzaAQY8pabX9+a09MWXNlBxk0zcpKSTRytozb1iwm/dSDA8490XMgyp6eIjeyioobv4Oerg2gLmosuuqvWLkKFIwhpN6Gn9kGLFvZZ+tXAo4mk8h7Kge2m3w401g3VTPizsekQtBiWqsyvI/GqPrVDpptcAy4GuoCDeQbcvmpYb5aI5K47LTI8qOHwYdVZNUtBqaDqsBLWjYA7T3lanB1tdNjyLuaD8xdc9bMGxopubqiTvFMHcm3svPcm/wD0TwMVUwtb7TD6x4dRs6qXlBcIF3tJ2AvJK6cVvRgfWz1ElKVxZfmlHENmjVbU2sJDhPVpEgrsUmQCoqpupFHUF1Xk9o0cmNzKnSEveB6kALIZvx2Bai2f7iYb7RcrGY3MKlY6qjtR6W0gdguRxC7GLwl3MxyzfR2Zjm9aufPUcR+GSGj2Bv7qvcUiZTSFthjUVSRQ5N9gJlQYymXU3tG7hH6mPYR8lOekJw6qfG1Qk6KnK88bBbX1W5g3ERuOfNb3hLOGVWDCBrfM5+iuCBEsMa2uBOqbBec57hWgio0tEmHNG8/ihcuXY99F2ukYPO3ld6g81xc+Di3E6OPJez3nKHB1UsIptfQp+BUDXQC10bgN8zTpmTtKGW5g11V9IT5ZIBgu0tMSCLFvQrEZHxRScHV2a2V2sDXslv2oqf1GybG/maTt7raOxNLF06dVuGxdGoxrm08S1tDyljZdJZUMsP4S0tK588Ots0xyb0WrmzfkgWBVVHNHNLTWNMMcJ1sB8Nxg3ZMFpJHw7Xsrlom/XkskocTSpWReGFI+wT2i09Fn8wz7VU8DDxVqBrnuawjU1jBJcXOs3pFyeiUYOWkDkl2R5rmEODGAO8xB6D+3uVy4LPPEPhVGvtSNNtKkCfEeJc51QdRAjpKosdg8XU+0NBzaJDSXgOLWNfH4rl0XlR8UPbgnsPivc2XNpuEGq9rWjzuAgbktlbceGMVXyZ55G3Ze43MaYpU6j65ogw99BsaHhh/pOJF5sY7ry2hW8XFFwEB1R9SwgBsuIAHIbKbiPiF+Me1zmtY1oIbTb8ImCSepsL9lLk9EBniEGXT28t7Ld4eB8kjPmyKrLWm8ggglrhcEEgj0I5rU5NxxiaQAeRXZ0qOh49HgfmsgwKZv0XVnijP3IxqbXR7DlHF2FxEDUKNQ/cqkCT/a/Yq7eP5v9QvBQ617+quMszmuxpayu9rQbCSQPK2w6Dsub5HicVcWXwy26ZUAKGpiabd3tFr3FjOyzFbF1KnxPPoDDRy2CgHp/CtkvK/xRQsP2zR1M3oj70+gcf0XNUz5nJjj6wP1VEkoPysnxRNYYlm/PXE+VjR3JJI+ULgrYh7vic75mPkogJSeqZ5Zz7ZNQiukMCGmNk5AhVkxzal5kh3KFr+FeM3YbU2pqcHfebeLEXpkgOnnCxp3RaSOahKKkqZKMqZ6zlfE+XeK2oyq+nWdDvM3RSpuEyyB5SCOW3davCcQ0CC51Skxm+rWywJ3e1pMTy9V8+60ZG8BUywJ/JZHJXwe58QcRaKQLfAaHtJDqjwXBn42sBABPIEyVnf90YTDYLTRr66jnyaekSHOnW4FjbCI3POwXlpA6Jao2TWBJUDyNs9Kq8cYWiHmn/qMVUdo06yaVFrQ0AtIBlwB1CwGwWIz/PKmLq+LV0iBDWNnRTZM6WySee5uqpzuabCnHHGO0Rbb7ZLQeNQ1E6ZvHqJ+i0gzGhsHgAWG/tyWXA5J2laceZ4+kVzgpGvZWY7Yh3psp2kW2+qxEQbW9CuujmNVttZI6OkrSvMT9yKnhfwzWDbl17+ifQN3eo6fhas/h8+IjWweo/Yqzw2aUzJkbjcGfhaOiWfLCWPTFGElLaM0g4pHomuWMuF3QhE79R/hFMQ2N0HdU83/AJ2hNCAGhF1uqMJJDGwmhOIQ+SAE0pE9kWj+fNBwSGCyM/z0shKJQAIS0opsoGON/wDAH6J4FtuyYi0pDCUZQKJdJlAgRdTUufr+gUI/l1NT5+3/AFChk6LMXuGkoFO6+ya9WlIhyRdsmsUhQAyOyUIfz80H/wA+SBBIRbYzv6pwUY3QMRCBCcxMb/PogAk9h+6RCTv3TeaYCHt/JRRrbe37qMKIx5IjvO8jbpEII/4SagYEUnckG/ogY+EAEXfF8vyQpb+yBDgJUlM7+o/6hI7j0H5oUufr+gUMnRZi9x//2Q=='
        //     }
        // ]);



        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => props.setUsers(response.data.items))
    }

    let users = props.users.map(u =>
        <div className={styles.user} key={u.id}>
            <div className={styles.location}>
                "location.country", "location.city"
            </div>
            <div>
                <img className={styles.img} src={u.photos.small} alt=""/>
            </div>
            <div>
                {u.name}
            </div>

            <div>
                {u.status}
            </div>
            {u.followed
                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                : <button onClick={() => props.follow(u.id)}>Follow</button>
            }
        </div>)

    return (
        <div>
            {users}
        </div>
    )
}

export default Users;
