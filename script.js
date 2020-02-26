// var app = new Vue({
//     el : ".app",
//     data:{
//     }
// }
// )
var main_pose = new Vue(
    {
        el: ".heading",
        data: {
            image: "Assets/all.png",
            alt_text: "Problem loading Image",
            h:"800px",
            w:"1000px"

        }
    }
)

var pose = new Vue(
    {
        el: ".pose-container",
        data: {
            indices: [0, 1, 2, 3],
            link: ["https://www.youtube.com/watch?time_continue=30&v=9QyXbfLIj7g&feature=emb_title"],
            alt_text: "Problem loading Image",
            image:"Assets/1.png",
            h:"200px",
            w:"300px",
            poses:
                [
                    {
                        number: 1,
                        image: "Assets/1.png",
                    },
                    {
                        number: 2,
                        image: "Assets/2.png"
                    },
                    {
                        number: 3,
                        image: "Assets/3.png",
                    },
                    {
                        number: 4,
                        image: "Assets/4.png",
                    }

                ]
        },
            methods: {
                changeImage(pose_name){
                    this.image = pose_name;
                }
            }

    }
)

