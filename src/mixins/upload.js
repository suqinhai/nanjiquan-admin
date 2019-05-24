import domain from '@/service/http/domain.js'

export default {
  data() {
    const token = localStorage.getItem('token')
    const adminInfo = JSON.parse(localStorage.getItem('adminInfo'))
    const mobile = adminInfo.userInfo.mobile

    return {
      domain,
      token,
      mobile,
    }
  },
  methods: {
    /* beforeUpload() {
      this.$loading({
        lock: true,
        text: '上传中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    },
    uploadError() {
      this.$loading().close()
    }, */
    limitFileSize(file, size) {
      console.log(file)
    },
    onPreview(file) {
      window.open(file.url)
    },
    onExceed() {
      this.$message({ message: '超出可上传数量，请删除后重新上传', type: 'error' })
    },
    getFileList(files) {
      const fileList = []
      files.forEach(file => {
        const index = file.lastIndexOf('?')
        file = file.slice(0, index === -1 ? file.length : index)

        const name = file.slice(file.lastIndexOf('/') + 1)
        fileList.push({ name, url: file})
      })

      return fileList
    }
  }
}