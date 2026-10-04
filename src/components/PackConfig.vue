<script setup lang="ts">
import { ref, reactive } from 'vue';

import type { PackConfig } from '../types/PackConfig';

const packIconFileName = ref<string | null>(null);
const packIconUrl = ref<string | null>(null);

const containerCollapsed = ref<boolean>(false);

const packConfig = reactive<PackConfig>({
    general: {
        name: '新建音效包',
        description: '',
        icon: undefined
    },
    java: {
        namespace: 'minecraft',
        format: 65
    },
    bedrock: {
        header_uuid: '',
        module_uuid: ''
    }
});

function handlePackIconChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        packConfig.general.icon = target.files[0];
        packIconFileName.value = target.files[0].name;
        packIconUrl.value = URL.createObjectURL(target.files[0]);
    }
}
</script>

<template>
    <div id="pack-config" class="collapsible-container" :class="{ collapsed: containerCollapsed }">
        <h2>资源包配置</h2>
        <button @click="containerCollapsed = !containerCollapsed" class="collapse-button">
            {{ containerCollapsed ? '展开' : '折叠' }}
        </button>
        <div v-show="!containerCollapsed">
            <h3>通用</h3>
            <div class="group-box">
                <table>
                    <tbody>
                        <tr>
                            <td>资源包名称</td>
                            <td><input type="text" v-model="packConfig.general.name" /></td>
                        </tr>
                        <tr>
                            <td>资源包描述</td>
                            <td><input type="text" v-model="packConfig.general.description" /></td>
                        </tr>
                        <tr>
                            <td>资源包图标</td>
                            <td>
                                <input type="file" accept="image/png" @change="handlePackIconChange" id="pack-icon" />
                                <label class="file-name" for="pack-icon">{{ packIconFileName || "选择图片" }}</label>
                                <img v-if="packIconUrl" :src="packIconUrl" alt="Pack Icon" class="icon-preview" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>Java版专用</h3>
            <div class="group-box">
                <table>
                    <tbody>
                        <tr>
                            <td>命名空间</td>
                            <td><input type="text" v-model="packConfig.java.namespace" /></td>
                        </tr>
                        <tr>
                            <td>格式版本</td>
                            <td><input type="number" v-model.number="packConfig.java.format" min="65" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3>基岩版专用</h3>
            <div class="group-box">
                <table>
                    <tbody>
                        <tr>
                            <td>Header UUID</td>
                            <td><input type="text" v-model="packConfig.bedrock.header_uuid" /></td>
                        </tr>
                        <tr>
                            <td>Module UUID</td>
                            <td><input type="text" v-model="packConfig.bedrock.module_uuid" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
#pack-config {
    flex: 1 1 auto;
}
</style>