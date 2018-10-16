<template>
    <div id="resume">
        <div class="head-tool">
            <el-select v-model="lang"  size="small" placeholder="请选择">
                <el-option
                        v-for="item in langOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <i class="el-icon-download"></i>
        </div>

        <div class="content">
            <div class="base-information">
                <p class="important-name">{{resumeData.name}}</p>
                <p class="base-title">{{resumeData.titles.information}}</p><hr class="base-line">
                <div v-for="info in resumeData.information"
                    :key="info.label">
                    <div class="item-label">{{info.label}}</div>:
                    <div class="item-value">{{info.value}}</div>
                </div>

                <p class="base-title">{{resumeData.titles.skills}}</p><hr class="base-line">
                <ul>
                    <li v-for="(skill, index) in resumeData.skills"
                        :key="index"
                        style="font-size: 15px;margin-bottom: 7px">{{skill}}</li>
                </ul>

                <p class="base-title">{{resumeData.titles.education}}</p><hr class="base-line">
                <ul>
                    <li v-for="(edu, index) of resumeData.education"
                        :key="index">
                        <div class="item-label-long">{{edu.time}}</div>
                        <div class="item-value">
                            <span>{{edu.school}}</span>
                            <span style="margin-left: 25px">{{edu.major}}</span>
                        </div>
                    </li>
                </ul>

                <p class="base-title">{{resumeData.titles.certificates}}</p><hr class="base-line">
                <ul>
                    <li v-for="(certi, index) of resumeData.certificates"
                        :key="index">
                        <div class="item-value">{{certi.value}}</div>
                        <div class="item-label-long" style="float: right; margin-right: 10px">{{certi.time}}</div>
                    </li>
                </ul>
            </div>

            <div class="self-experience">
                <p class="base-title">{{resumeData.titles.experience}}</p><hr class="base-line">
                <ul>
                    <li v-for="(ex, index) of resumeData.experience"
                        :key="index">
                        <div class="item-label-long">
                            <span>{{ex.time}}</span>
                            <span style="margin-left: 50px">{{ex.company}}</span>
                            <span style="margin-left: 50px">{{ex.title}}</span>
                        </div><br>
                        <div class="item-value">
                            <ul>
                                <li v-for="(con, index) in ex.content" :key="index">{{con}}</li>
                            </ul>
                        </div>
                    </li>
                </ul>

                <p class="base-title">{{resumeData.titles.projects}}</p><hr class="base-line">
                <ul>
                    <li v-for="(project, index) of resumeData.projects"
                        style="margin-bottom: 10px"
                        :key="index">
                        <div class="item-label-long">
                            <span>{{project.time}}</span>
                            <span style="margin-left: 50px">{{project.name}}</span>
                        </div>
                        <div>{{project.key.label}} : {{project.key.value}}</div>
                        <div class="item-value">
                            <ul>
                                <li v-for="(pro, index) in project.content" :key="index"
                                style="margin-bottom: 2px">{{pro}}</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
    import Resume from '../../data/resume'

    export default {
        name: "resume",
        data(){
            return {
                lang: 'Chinese',
                langOptions: [{
                    value: 'Chinese',
                    label: '中'
                }, {
                    value: 'English',
                    label: 'EN'
                }]
            }
        },
        computed: {
            resumeData(){
                return Resume.lang[this.lang];
            }
        }
    }
</script>

<style lang="scss" scoped>
#resume{

    .head-tool{
        .el-select{
            width: 70px;
        }
        float: right;
        i{
            color: #42b983;
            margin-left: 5px;
        }
    }
    .content{
        width: 900px;
        margin: auto;
        position: relative;
        overflow: hidden;
        background-color: #ffffff;
        border-radius: 2px;
        text-align: left;
        box-shadow: 0 0 8px #ccc;
        .important-name{
            font-weight: bold;
            font-size: 28px;
            text-align: center;
            padding-bottom: 15px;
        }
        p.base-title{
            font-weight: bold;
            font-size: 18px;
            margin-left: 20px;
            margin-top: 30px;
        }
        hr.base-line{
            width:92%;
            margin-top: -17px;
            border: 0;
            height: 1px;
            background: #333;
            background-image: linear-gradient(to right,#333, #333, #ccc);
        }

        div.item-label{
            font-weight: 500;
            margin-left: 25px;
            width: 70px;
            margin-right: 2px;
            text-align: right;
            display: inline-block;
        }
        div.item-label-long{
            font-weight: 600;
            display: inline-block;
        }
        div.item-value{
            display: inline-block;
            font-size: 15px;
        }
        .base-information{
            width: 350px;
            float: left;
            height: 800px;
            box-shadow: 0 0 8px #EDF5FE;
            background-color: #EDF5FE;
        }
        .self-experience{
            width: 550px;
            margin-left: 350px;
            background-color: #ffffff;
        }
    }

}
</style>