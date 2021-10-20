#!/usr/bin/env node
const commander  = require('commander')
const ora = require('ora')
const  chalk = require('chalk')
const downGit = require('download-git-repo')

commander.command('init')
  .description('初始化模板')
  .action(type => {
    var spinner = ora('下载中').start()
    downGit('github:chenshuideshizi/vue-template', process.cwd(), {clone: false}, function (err) {
      if (err) throw err
        spinner.stop()
        console.log(chalk.green('下载成功'))
      }
    )
  })

  commander.parse(process.argv) 